$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

Write-Host "한화그린 로컬 Docker 환경 시작..." -ForegroundColor Cyan
docker compose up -d

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "접속 주소: http://localhost:8080" -ForegroundColor Green
    Write-Host "중지: docker compose down" -ForegroundColor DarkGray
}
