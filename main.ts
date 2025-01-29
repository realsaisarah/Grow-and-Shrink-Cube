function ShrinkGrowCube () {
    Small_Cube()
    cubebit.ledBrightness(10)
    basic.pause(500)
    cubebit.ledClear()
    Middle_Cube()
    cubebit.ledBrightness(50)
    basic.pause(500)
    cubebit.ledClear()
    Large_Cube()
    cubebit.ledBrightness(100)
    basic.pause(500)
    cubebit.ledClear()
    Middle_Cube()
    cubebit.ledBrightness(50)
    basic.pause(500)
    cubebit.ledClear()
}
function Large_Cube () {
    cubebit.setPixelColor(0, CubeColour)
    cubebit.setPixelColor(25, CubeColour)
    cubebit.setPixelColor(50, CubeColour)
    cubebit.setPixelColor(75, CubeColour)
    cubebit.setPixelColor(100, CubeColour)
    cubebit.setPixelColor(20, CubeColour)
    cubebit.setPixelColor(45, CubeColour)
    cubebit.setPixelColor(70, CubeColour)
    cubebit.setPixelColor(95, CubeColour)
    cubebit.setPixelColor(120, CubeColour)
    cubebit.setPixelColor(24, CubeColour)
    cubebit.setPixelColor(49, CubeColour)
    cubebit.setPixelColor(74, CubeColour)
    cubebit.setPixelColor(99, CubeColour)
    cubebit.setPixelColor(124, CubeColour)
    cubebit.setPixelColor(4, CubeColour)
    cubebit.setPixelColor(29, CubeColour)
    cubebit.setPixelColor(54, CubeColour)
    cubebit.setPixelColor(79, CubeColour)
    cubebit.setPixelColor(104, CubeColour)
    cubebit.setPixelColor(5, CubeColour)
    cubebit.setPixelColor(10, CubeColour)
    cubebit.setPixelColor(15, CubeColour)
    cubebit.setPixelColor(1, CubeColour)
    cubebit.setPixelColor(2, CubeColour)
    cubebit.setPixelColor(3, CubeColour)
    cubebit.setPixelColor(21, CubeColour)
    cubebit.setPixelColor(22, CubeColour)
    cubebit.setPixelColor(23, CubeColour)
    cubebit.setPixelColor(9, CubeColour)
    cubebit.setPixelColor(14, CubeColour)
    cubebit.setPixelColor(19, CubeColour)
    cubebit.setPixelColor(105, CubeColour)
    cubebit.setPixelColor(110, CubeColour)
    cubebit.setPixelColor(115, CubeColour)
    cubebit.setPixelColor(121, CubeColour)
    cubebit.setPixelColor(122, CubeColour)
    cubebit.setPixelColor(123, CubeColour)
    cubebit.setPixelColor(109, CubeColour)
    cubebit.setPixelColor(114, CubeColour)
    cubebit.setPixelColor(119, CubeColour)
    cubebit.setPixelColor(101, CubeColour)
    cubebit.setPixelColor(102, CubeColour)
    cubebit.setPixelColor(103, CubeColour)
}
function Small_Cube () {
    cubebit.setPixelColor(62, CubeColour)
}
function Middle_Cube () {
    MiddleList = [
    91,
    66,
    41,
    93,
    68,
    43,
    42,
    92,
    88,
    83,
    58,
    33,
    38,
    81,
    82,
    56,
    31,
    32,
    86,
    36
    ]
    for (let value of MiddleList) {
        cubebit.setPixelColor(value, CubeColour)
    }
}
let MiddleList: number[] = []
let CubeColour = 0
let Size = 5
CubeColour = 0xB09EFF
cubebit.create(DigitalPin.P0, Size)
cubebit.ledClear()
cubebit.ledBrightness(18)
cubebit.ledShow()
basic.forever(function () {
    ShrinkGrowCube()
})
