export const enemyImage = new Image();
export const foodImage = new Image();

export function loadAssets() {
    return new Promise((resolve) => {
        let assetsToLoad = 2;
        let assetsLoaded = 0;

        const onAssetLoaded = () => {
            assetsLoaded++;
            if (assetsLoaded === assetsToLoad) {
                resolve();
            }
        };
        enemyImage.onload = onAssetLoaded;
        foodImage.onload = onAssetLoaded;
        enemyImage.src = 'assets/images/enemy.png';
        foodImage.src = 'assets/images/food.png';
    });
}