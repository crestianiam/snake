export const welcomeImage = new Image();
export const enemyImage = new Image();
export const foodImage = new Image();
export const headUpImage = new Image();
export const headDownImage = new Image();
export const headRightImage = new Image();
export const headLeftImage = new Image();
export const gameOverImage = new Image();

const assetMap = {
    welcomeImage: welcomeImage,
    enemyImage: enemyImage,
    foodImage: foodImage,
    headUpImage: headUpImage,
    headDownImage: headDownImage,
    headRightImage: headRightImage,
    headLeftImage: headLeftImage,
    gameOverImage: gameOverImage,
};

const assetPaths = {
    welcomeImage: { default: 'assets/images/welcome.png', local: 'assets/local/welcome.png' },
    enemyImage: { default: 'assets/images/enemy.png', local: 'assets/local/enemy.png' },
    foodImage: { default: 'assets/images/food.png', local: 'assets/local/food.png' },
    headUpImage: { default: 'assets/images/headUp.png', local: 'assets/local/headUp.png' },
    headDownImage: { default: 'assets/images/headDown.png', local: 'assets/local/headDown.png' },
    headRightImage: { default: 'assets/images/headRight.png', local: 'assets/local/headRight.png' },
    headLeftImage: { default: 'assets/images/headLeft.png', local: 'assets/local/headLeft.png' },
    gameOverImage: { default: 'assets/images/gameOver.png', local: 'assets/local/gameOver.png' },
};

export function loadAssets() {
    return new Promise((resolve) => {
        const assetKeys = Object.keys(assetMap);
        let assetsToLoad = assetKeys.length;
        let assetsLoaded = 0;

        const onAssetLoaded = () => {
            assetsLoaded++;
            if (assetsLoaded === assetsToLoad) {
                resolve();
            }
        };

        assetKeys.forEach(key => {
            const image = assetMap[key];
            const paths = assetPaths[key];

            image.onload = onAssetLoaded;
            image.onerror = () => {
                console.warn(`Local image ${key} not found. Using the default image.`);
                image.src = paths.default;
            };

            image.src = paths.local;
        });
    });
}