function l()
    local args = {
        [1] = 2,
        [2] = {
            [1] = 1,
            [2] = 1,
            [3] = 11
        }
    }
    game:GetService("ReplicatedStorage").Project.RemoteEvent.ControlMessageEvent:FireServer(unpack(args))
end
-- auto get items
spawn(function()
    while wait() do
        l()
        l()
        l()
        l()
        l()
        l()
    end
end)

-- auto buys
spawn(function()
    while wait(1) do
        for i = 1, 4 do
            local args = {
                [1] = 2,
                [2] = {
                    [1] = 2,
                    [2] = i
                }
            }
            
            game:GetService("ReplicatedStorage").Project.RemoteEvent.ControlMessageEvent:FireServer(unpack(args))
        end
    end
end)
