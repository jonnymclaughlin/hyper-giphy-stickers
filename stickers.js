const getRandom = function(array) {
    return array[Math.floor(Math.random() * array.length)];
};

exports.commands = ['pull', 'push', 'deploy', 'publish', 'start'];

exports.getConfetti = function() {
    return getRandom([
        'https://media.giphy.com/media/120ErahsQyf1q8/giphy.gif',
        'https://media.giphy.com/media/NxpMNq17Y2Khq/giphy.gif'
    ]);
};

exports.getHigh = function() {
    return getRandom([
        { url: 'https://media.giphy.com/media/3oKIPmkf1MZhNX54w8/200.gif', direction: 'left' },
        { url: 'https://media.giphy.com/media/J74dsRDRjjKRW/200.gif' },
        { url: 'https://media.giphy.com/media/MH4gH8DX5fBG8/200.gif' }
    ]);
};

exports.getSticker = function(keyword) {
    switch (keyword) {
        case 'push':
            return getRandom([
                { url: 'https://media.giphy.com/media/3oEdv7k0xOZHOSpAwo/200.gif' },
                { url: 'https://media.giphy.com/media/3o6gE51uXycrKW6D84/200.gif', direction: 'left' },
                { url: 'https://media.giphy.com/media/120g3dPBOgftqU/200.gif' },
                { url: 'https://media.giphy.com/media/fojJlPjoRgRpe/200.gif' },
                { url: 'https://media.giphy.com/media/l378ryVoDmMwKoSt2/200.gif', direction: 'left' },
                { url: 'https://media.giphy.com/media/l378Bu88CUbQyFniM/200.gif', direction: 'left' },
                { url: 'https://media.giphy.com/media/4BJCvMoLPePq8/200.gif' },
                { url: 'https://media.giphy.com/media/5fBH6zrcIiOs65zXCtG/200.gif' },
                { url: 'https://media.giphy.com/media/PHhaNieEvkHao/200.gif', direction: 'left' },
                { url: 'https://media.giphy.com/media/3ohzdIC9neHjucxQB2/200.gif', direction: 'left' },
                { url: 'https://media.giphy.com/media/gnLasL9HiovQI/200.gif' },
                { url: 'https://media.giphy.com/media/9ZoZjIhV9ASU8/200.gif' },
                { url: 'https://media.giphy.com/media/l378tbMVnOycjrfa0/200.gif' }
            ]);
        case 'pull':
            return getRandom([
                { url: 'https://media.giphy.com/media/rFsm3p6zCvScU/200.gif', direction: 'left' },
                { url: 'https://media.giphy.com/media/SFMZhvWsuUMj6/200.gif' },
                { url: 'https://media.giphy.com/media/l378jTR4iHXQ0dPZm/200.gif' },
                { url: 'https://media.giphy.com/media/tXMlGu8p96FFK/200.gif' },
                { url: 'https://media.giphy.com/media/l378bC3TlAEMVk2oU/200.gif' },
                { url: 'https://media.giphy.com/media/3ov9jJL3Q6QWqYJK2Q/200.gif' },
                { url: 'https://media.giphy.com/media/At6Bo00nqudck/200.gif', direction: 'left' },
                { url: 'https://media.giphy.com/media/xUA7bawPmP2gglnzR6/200.gif' },
                { url: 'https://media.giphy.com/media/l0IykOPjEJopboxWw/200.gif', direction: 'left' },
                { url: 'https://media.giphy.com/media/d3ML8uo39Q8jxwEE/200.gif', directoin: 'left' },
                { url: 'https://media.giphy.com/media/3ohhwENxFSJFr4S10c/200.gif' }
            ]);
        case 'start':
            return getRandom([
                { url: 'https://media.giphy.com/media/3o6fJ3xFENBRxVFvUc/200.gif' },
                { url: 'https://media.giphy.com/media/3ohs4AyHI0vBxFnIIM/200.gif' },
                { url: 'https://media.giphy.com/media/a74pSGN7wvT7a/200.gif', direction: 'left' },
                { url: 'https://media.giphy.com/media/6LMDGsUHsdRC0/200.gif', direction: 'left' }
            ]);
        case 'deploy':
        case 'publish':
            return getRandom([
                { url: 'https://media.giphy.com/media/7Y8Mzy3rRUTC0/200.gif' },
                { url: 'https://media.giphy.com/media/ETqFDJY9LfMuA/200.gif' },
                { url: 'https://media.giphy.com/media/4BJCvMoLPePq8/200.gif' },
                { url: 'https://media.giphy.com/media/wjIDrGKbvuGxW/200.gif', direction: 'left' },
                { url: 'https://media.giphy.com/media/uglH7hBsJrTRm/200.gif', direction: 'left' },
                { url: 'https://media.giphy.com/media/3ohzdGa1th9AhvD03K/200.gif' }
            ]);
        default:
            return null;
    }
};
