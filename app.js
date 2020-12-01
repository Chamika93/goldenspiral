import * as PIXI from 'pixi.js'

class Sketch {
    constructor() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.app = new PIXI.Application({
            backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
            resizeTo: window
        });
        document.body.appendChild(this.app.view);

        this.container = new PIXI.Container();

        this.app.stage.addChild(this.container);

        this.add();
        this.addLines();
        this.render();
    }

    addLines() {
        this.ctx = new PIXI.Graphics;
        this.ctx.lineStyle(2, 0xff0000, 1)
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(400, 400);

        this.container.addChild(this.ctx);
    }

    add() {
        let block = new PIXI.Sprite(PIXI.Texture.WHITE);
        block.tint = 0Xff0000;
        block.width = 100;
        block.height = 100;

        this.container.addChild(block);
    }

    render() {
        // Listen for animate update
        this.app.ticker.add((delta) => {
            // rotate the container!
            // use delta to create frame-independent transform
            // container.rotation -= 0.01 * delta;

        });
    }
}

new Sketch