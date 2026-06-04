$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

docker compose down
Write-Host "컨테이너를 중지했습니다." -ForegroundColor Yellow
