# Windows PowerShell Guide

Since you're using PowerShell, here are the correct commands for Windows.

## 🚀 Starting the Development Server

### Option 1: Use the PowerShell Script (Easiest)

```powershell
.\start-dev.ps1
```

This script automatically:
- Kills any running Next.js processes
- Clears the .next cache
- Starts the dev server fresh

### Option 2: Manual Commands

```powershell
# Kill the process using port 3000
$port = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($port) { Stop-Process -Id $port.OwningProcess -Force }

# Remove .next directory
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# Start dev server
npm run dev
```

### Option 3: Simple One-Liner

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue; npm run dev
```

## 🛑 Stopping the Server

Press `Ctrl+C` in the terminal running the dev server.

## 🔧 Common Issues & Solutions

### Issue: "Port 3000 is in use"

**Solution 1 - Kill the process by PID:**
```powershell
taskkill /F /PID [ProcessID]
```
Replace `[ProcessID]` with the number shown in the error (e.g., 20592).

**Solution 2 - Kill all Node processes:**
```powershell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
```

**Solution 3 - Use a different port:**
```powershell
$env:PORT=3001; npm run dev
```

### Issue: "Unable to acquire lock"

**Solution:**
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

### Issue: "rm -rf doesn't work in PowerShell"

PowerShell uses different commands than bash:
- Bash: `rm -rf .next`
- PowerShell: `Remove-Item -Recurse -Force .next`

## 📝 PowerShell vs Bash Commands

| Task | Bash | PowerShell |
|------|------|------------|
| Remove directory | `rm -rf .next` | `Remove-Item -Recurse -Force .next` |
| Kill process | `kill -9 PID` | `Stop-Process -Id PID -Force` |
| List processes | `ps` | `Get-Process` |
| Find port usage | `lsof -i :3000` | `Get-NetTCPConnection -LocalPort 3000` |

## 🎯 Recommended Workflow

1. **First time:**
   ```powershell
   npm install
   .\start-dev.ps1
   ```

2. **Daily development:**
   ```powershell
   .\start-dev.ps1
   ```

3. **When done:**
   - Press `Ctrl+C` in the terminal

## 💡 Pro Tips

### Create an Alias
Add to your PowerShell profile (`$PROFILE`):
```powershell
function Start-BuonGustaio {
    Set-Location "C:\Users\andre\Documents\CodingProjects\BuonGustaio"
    .\start-dev.ps1
}
Set-Alias bg Start-BuonGustaio
```

Then just type `bg` to start the server!

### Quick Port Killer Function
Add to your PowerShell profile:
```powershell
function Kill-Port($port) {
    $conn = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    if ($conn) {
        Stop-Process -Id $conn.OwningProcess -Force
        Write-Host "Killed process on port $port" -ForegroundColor Green
    } else {
        Write-Host "No process found on port $port" -ForegroundColor Yellow
    }
}
```

Usage: `Kill-Port 3000`

## 🔍 Troubleshooting

### Find what's using port 3000:
```powershell
Get-NetTCPConnection -LocalPort 3000 | Select-Object OwningProcess, State
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess
```

### Kill everything on port 3000:
```powershell
$process = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($process) {
    taskkill /F /PID $process.OwningProcess
}
```

### Clean restart:
```powershell
# Stop all Node processes
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force

# Clean cache
Remove-Item -Recurse -Force .next, node_modules\.cache -ErrorAction SilentlyContinue

# Restart
npm run dev
```

## 🚀 Your Next Steps

1. Make sure no dev server is running (check your other terminals)
2. Run: `.\start-dev.ps1`
3. Open: http://localhost:3000
4. Start customizing!

## ⚠️ If Nothing Works

Nuclear option (complete reset):
```powershell
# Kill all Node processes
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force

# Remove all cache
Remove-Item -Recurse -Force .next, node_modules -ErrorAction SilentlyContinue

# Reinstall
npm install
npm run dev
```
