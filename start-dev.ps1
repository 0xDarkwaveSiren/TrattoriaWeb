# PowerShell script to start development server
# This handles port conflicts and lock issues automatically

Write-Host "Cleaning up..." -ForegroundColor Yellow

# Kill any existing Next.js processes
Get-Process -Name "node" -ErrorAction SilentlyContinue | Where-Object {
    $_.MainWindowTitle -like "*Next.js*" -or
    $_.Path -like "*BuonGustaio*"
} | Stop-Process -Force -ErrorAction SilentlyContinue

# Kill processes using port 3000
$port3000 = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($port3000) {
    $processId = $port3000.OwningProcess
    Write-Host "Killing process $processId using port 3000..." -ForegroundColor Yellow
    Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
}

# Remove .next directory if it exists
if (Test-Path ".next") {
    Write-Host "Removing .next directory..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
}

# Wait a moment for cleanup
Start-Sleep -Seconds 1

# Start dev server
Write-Host "`nStarting development server..." -ForegroundColor Green
npm run dev
