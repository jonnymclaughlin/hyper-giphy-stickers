const commands = require('./stickers.js').commands;
const getSticker = require('./stickers.js').getSticker;
const getConfetti = require('./stickers.js').getConfetti;
const getHigh = require('./stickers.js').getHigh;

const SPEED = 10;
const CELEBRATION = ['deploy', 'publish'];

exports.decorateTerm = (Term, { React, notify }) => {
    return class extends React.Component {
        constructor(props, context) {
            super(props, context);
            this.queuedKeywords = [];
            this.sticker = null;
            this.stickerSpeed = SPEED;
            this.onKeyDown = this._onKeyDown.bind(this);
        }
        checkForKeywords() {
            const command = this.queuedKeywords.join('').toLowerCase();
            let keyword = null;

            for (let i = 0; i < commands.length; i++) {
                if (command.indexOf(commands[i]) > -1) {
                    keyword = commands[i];
                    break;
                }
            }

            if (keyword) {
                this.addSticker(getSticker(keyword), CELEBRATION.indexOf(keyword) > -1);
            }

            this.queuedKeywords = [];
        }
        addSticker(sticker, isDeploy = false) {
            if (!this.div || !sticker || this.sticker) return;

            const isLeft = sticker.direction === 'left';
            const div = document.createElement('div');
            div.style.width = '200px';
            div.style.height = '200px';
            div.style.position = 'fixed';
            div.style.bottom = '0px';
            div.style.left = '0px';
            div.style.backgroundSize = 'contain';
            div.style.backgroundPosition = 'center center';
            div.style.backgroundRepeat = 'no-repeat';
            div.style.backgroundImage = `url("${sticker.url}")`;
            document.body.appendChild(div);

            if (isDeploy) {
                document.body.style.background = `repeat-x url("${getConfetti()}") center top`;
                document.body.style.backgroundSize = 'auto 100vh';
            }

            this.sticker = div;
            this.stickerSpeed = SPEED * (isLeft ? -1 : 1);
            this.moveSticker(isLeft ? window.innerWidth : -200);
        }
        moveSticker(x = -200) {
            this.sticker.style.transform = `translate3d(${x}px, 0, 0)`;

            if (x > window.innerWidth || x < -200) {
                this.removeSticker();
            } else {
                window.requestAnimationFrame(() => this.moveSticker(x + this.stickerSpeed));
            }
        }
        removeSticker() {
            document.body.removeChild(this.sticker);
            document.body.style.background = '';
            document.body.style.backgroundSize = '';
            this.sticker = null;
        }
        _onTerminal(term) {
            this.div = term.div_;
            this.setState({ width: this.div.outerWidth });
            term.document_.removeEventListener('keyup', this.onKeyDown, false);
            term.document_.addEventListener('keyup', this.onKeyDown, false);
        }
        _onKeyDown({ key, which }) {
            const now = new Date();
            const is420 = now.getHours() === 16 && now.getMinutes() === 20;

            if (is420) {
                this.addSticker(getHigh());
            } else if (which === 13) {
                this.checkForKeywords();
            } else {
                this.queuedKeywords.push(key);
            }
        }
        render() {
            return React.createElement(
                Term,
                Object.assign({}, this.props, {
                    onTerminal: term => this._onTerminal(term)
                })
            );
        }
    };
};
