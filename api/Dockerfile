FROM lukemathwalker/cargo-chef:latest-rust-1.92.0 AS chef
WORKDIR /api
RUN apt update && apt install lld clangd -y

FROM chef AS planner
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

FROM chef AS builder
COPY --from=planner /api/recipe.json recipe.json
RUN cargo chef cook --release --recipe-path recipe.json
COPY . .
ENV SQLX_OFFLINE=true
RUN cargo build --release --bin api

FROM debian:sid-slim AS runtime
WORKDIR /api
RUN apt-get update -y \
	&& apt-get install -y --no-install-recommends openssl ca-certificates \
	&& apt-get autoremove -y \
	&& apt-get clean -y \
	&& rm -rf /var/lib/apt/lists/*
COPY --from=builder /api/target/release/api api
COPY configuration configuration
ENV APP_ENVIRONMENT=production
ENTRYPOINT ["./api"]
