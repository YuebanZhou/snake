;
(function (window, document, util, Food, Snake) {

    // 创建食物
    var food = new Food()

    // 创建蛇对象
    var snake = new Snake()

    var btnStart = document.querySelector('#btn_start')
    btnStart.addEventListener('click', function () {
        // 开始游戏
        snake.move(food)
    })

    // 监听按键事件，处理蛇的运动方向
    document.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
            case 37:
                snake.direction = 'left'
                break
            case 38:
                snake.direction = 'up'
                break
            case 39:
                snake.direction = 'right'
                break
            case 40:
                snake.direction = 'down'
                break
        }
    })
})(window, document, util, Food, Snake)

