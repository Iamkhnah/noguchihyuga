
local l = loadstring(game:HttpGet("https://raw.githubusercontent.com/Euro-pol/Elerium-V2/refs/heads/main/elerium.lua"))()
local w = l:AddWindow("Vxeze Hub - Dig to Earth's CORE!")
local tab = w:AddTab("Main")
tab:Show()

tab:AddLabel("wtf bro is cheating on game for kids")
local switch = tab:AddSwitch("Auto Farm", function(v)
	getgenv()["troi"] = v
end)

switch:Set(false)

local switch2 = tab:AddSwitch("Auto Get Money", function(v)
	getgenv()["autogetmoney"] = v
end)

switch2:Set(false)

local switch3 = tab:AddSwitch("Auto Get Gem", function(v)
	getgenv()["autogetgem"] = v
end)

switch3:Set(false)

local switch4 = tab:AddSwitch("Auto Get Spin", function(v)
	getgenv()["autogetspin"] = v
end)

switch4:Set(false)

local switch5 = tab:AddSwitch("Auto Spin", function(v)
	game:GetService("Players").LocalPlayer:SetAttribute("AutoSpin", v)
end)

switch5:Set(false)

spawn(function()
    while  wait() do
        if getgenv()["troi"] then
            spawn(function()
                pcall(function()
                    if game:GetService("Players").LocalPlayer.CurrentWorld.Value ~= 10 then
                        game:GetService("Players").LocalPlayer.leaderstats.Wins = 10000000
                        game:GetService("ReplicatedStorage").Remotes.WorldTeleportEvent:FireServer(10)
                    end
                end)
                game:GetService("Players").LocalPlayer:SetAttribute("SelectedPickaxe", "Cosmic")
                game:GetService("ReplicatedStorage").Remotes.TreasureEvent:FireServer("Chest")
                game:GetService("Players").LocalPlayer.AutoDig.Value = true
            end)
        else
            game:GetService("Players").LocalPlayer.AutoDig.Value = false
        end
    end
end)

spawn(function()
    while task.wait() do
        if getgenv()["autogetmoney"] then
            game:GetService("ReplicatedStorage").Remotes.DigEvent:FireServer("hello")
        end
        if getgenv()["autogetgem"] then
            game:GetService("ReplicatedStorage").Remotes.GemEvent:FireServer(10, "bye")
        end
        if getgenv()["autogetspin"] then
            game:GetService("ReplicatedStorage").Remotes.SpinPrizeEvent:FireServer(7)
        end
    end    
end)
