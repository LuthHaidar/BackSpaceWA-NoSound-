let streams = [];
const fadeInterval = 1.4;
const symbolSize = 15;

class SymbolObj {
	constructor(x, y, speed, first, opacity) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.first = first;
		this.opacity = opacity;
		this.switchInterval = Math.round(random(2, 25));
	}

	setToRandomSymbol() {
		const charType = Math.round(random(0, 5));
		if (frameCount % this.switchInterval === 0) {
			if (charType > 1) {
				// set it to Katakana
				this.value = String.fromCharCode(0x30A0 + Math.round(random(0, 96)));
			} else {
				// set it to numeric
				this.value = Math.round(random(0, 9));
			}
		}
	}

	rain() {
		this.y = (this.y >= height) ? 0 : this.y += this.speed;
	}
}

class Stream {
	constructor() {
		this.symbols = [];
		this.totalSymbols = Math.round(random(5, 35));
		this.speed = random(5, 12);
	}

	generateSymbols(x, y) {
		let opacity = 255;
		let first = Math.round(random(0, 4)) === 1;
		for (let i = 0; i <= this.totalSymbols; i++) {
			const symbol = new SymbolObj(x, y, this.speed, first, opacity);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			opacity -= (255 / this.totalSymbols) / fadeInterval;
			y -= symbolSize;
			first = false;
		}
	}

	render() {
		this.symbols.forEach(symbol => {
			if (symbol.first) {
				fill(255, 140, 170, symbol.opacity);
			} else {
				fill(255, 0, 70, symbol.opacity);
			}
			text(symbol.value, symbol.x, symbol.y);
			symbol.rain();
			symbol.setToRandomSymbol();
		});
	}
}

function backgroundSetup() {
  let x = 0;
	for (let i = 0; i <= width / symbolSize; i++) {
		const stream = new Stream();
		stream.generateSymbols(x, random(-2000, 0));
		streams.push(stream);
		x += symbolSize;
	}
}

function backgroundDraw() {
	textSize(symbolSize);
	streams.forEach(stream => {
		stream.render();
	});
}