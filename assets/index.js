export const enemyImage = new Image();
export const foodImage = new Image();
export const headUpImage = new Image();
export const headDownImage = new Image();
export const headRightImage = new Image();
export const headLeftImage = new Image();

export function loadAssets() {
    return new Promise((resolve) => {
        let assetsToLoad = 6;
        let assetsLoaded = 0;

        const onAssetLoaded = () => {
            assetsLoaded++;
            if (assetsLoaded === assetsToLoad) {
                resolve();
            }
        };
        enemyImage.onload = onAssetLoaded;
        foodImage.onload = onAssetLoaded;
        headUpImage.onload = onAssetLoaded;
        headDownImage.onload = onAssetLoaded;
        headRightImage.onload = onAssetLoaded;
        headLeftImage.onload = onAssetLoaded;
        enemyImage.src = 'assets/images/enemy.png';
        foodImage.src = 'assets/images/food.png';
        headUpImage.src = 'assets/images/headUp.png';
        headDownImage.src = 'assets/images/headDown.png';
        headRightImage.src = 'assets/images/headRight.png';
        headLeftImage.src = 'assets/images/headLeft.png';
    });
}