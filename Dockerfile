# Gunakan image Bun resmi
FROM oven/bun:latest

# Set direktori kerja
WORKDIR /app

# Salin file proyek
COPY . .

# Install dependensi
RUN bun install

# Build aplikasi
RUN bun run build

# Expose port
EXPOSE 5173

# Jalankan aplikasi
CMD ["bun", "run", "build/index.js"]