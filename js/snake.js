;
(function (window) {
    var self
    var map = document.querySelector('.map')

    function Snake(options) {
        self = this
        options = options || {}
        self.width = options.width || 20
        self.height = options.height || 20
        self.direction = 'right'
        self.body = [
            {
                x: 3, y: 2,
                color: 'rgb(0,0,0)',
                element: document.createElement('div')
            },
            {
                x: 2, y: 2,
                color: 'rgb(50,50,50)',
                element: document.createElement('div')
            },
            {
                x: 1, y: 2,
                color: 'rgb(100,100,100)',
                element: document.createElement('div')
            },
        ]
        self.init()
    }

    Snake.prototype.init = function () {
        self.body.forEach(function (item) {
            var div = item.element
            div.style.width = self.width + 'px'
            div.style.height = self.height + 'px'
            div.style.backgroundColor = item.color
            div.style.position = 'absolute'
            div.style.left = item.x * self.width + 'px'
            div.style.top = item.y * self.height + 'px'
            map.appendChild(div)
        })
    }

    Snake.prototype.move = function (food) {
        // 1. 开启定时器
        // 2. 在定时器中循环蛇的 body 让其身体的每一节的 x +1
        // 3. 然后修改具体 DOM 的 left 坐标
        setInterval(function () {
            var start = self.body.length - 1
            for (var i = start; i > 0; i--) {
                var item = self.body[i]
                item.x = self.body[i - 1].x
                item.y = self.body[i - 1].y
                item.element.style.left = item.x * self.width + 'px'
                item.element.style.top = item.y * self.height + 'px'
            }

            var head = self.body[0]

            switch (self.direction) {
                case 'left':
                    console.log('←')
                    head.x -= 1
                    head.element.style.left = head.x * self.width + 'px'
                    break
                case 'right':
                    console.log('→')
                    head.x += 1
                    head.element.style.left = head.x * self.width + 'px'
                    break
                case 'up':
                    console.log('↑')
                    head.y -= 1
                    head.element.style.top = head.y * self.height + 'px'
                    break
                case 'down':
                    console.log('↓')
                    head.y += 1
                    head.element.style.top = head.y * self.height + 'px'
                    break
            }

            if (head.x * self.width === food.x && head.y * self.height === food.y) {
                // 蛇吃到食物了
                // 让蛇的身体 + 1 节
                var last = self.body[self.body.length - 1]
                var element = document.createElement('div')
                element.style.width = self.width + 'px'
                element.style.height = self.height + 'px'
                element.style.backgroundColor = 'green'
                element.style.position = 'absolute'
                element.style.left = last.x * self.width + 'px'
                element.style.top = last.y * self.height + 'px'
                self.body.push({
                    x: last.x,
                    y: last.y,
                    color: last.color,
                    element: element
                })
                // 这里要手动追加到地图中，否则看不到
                map.appendChild(element)
                food.render()
            }
        }, 500)
    }
    window.Snake = Snake
})(window)
