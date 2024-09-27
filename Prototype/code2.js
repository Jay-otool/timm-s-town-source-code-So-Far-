gdjs.You_32Died_32drse1Code = {};
gdjs.You_32Died_32drse1Code.localVariables = [];
gdjs.You_32Died_32drse1Code.GDNewSpriteObjects1= [];
gdjs.You_32Died_32drse1Code.GDNewSpriteObjects2= [];
gdjs.You_32Died_32drse1Code.GDNewSprite2Objects1= [];
gdjs.You_32Died_32drse1Code.GDNewSprite2Objects2= [];
gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1= [];
gdjs.You_32Died_32drse1Code.GDNewSprite3Objects2= [];


gdjs.You_32Died_32drse1Code.eventsList0 = function(runtimeScene) {

};gdjs.You_32Died_32drse1Code.eventsList1 = function(runtimeScene) {

{


gdjs.You_32Died_32drse1Code.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1[k] = gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("hovered");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1.length;i<l;++i) {
    if ( !(gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1[k] = gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("idol");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1[k] = gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dream Sequence 1", false);
}}

}


};

gdjs.You_32Died_32drse1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.You_32Died_32drse1Code.GDNewSpriteObjects1.length = 0;
gdjs.You_32Died_32drse1Code.GDNewSpriteObjects2.length = 0;
gdjs.You_32Died_32drse1Code.GDNewSprite2Objects1.length = 0;
gdjs.You_32Died_32drse1Code.GDNewSprite2Objects2.length = 0;
gdjs.You_32Died_32drse1Code.GDNewSprite3Objects1.length = 0;
gdjs.You_32Died_32drse1Code.GDNewSprite3Objects2.length = 0;

gdjs.You_32Died_32drse1Code.eventsList1(runtimeScene);

return;

}

gdjs['You_32Died_32drse1Code'] = gdjs.You_32Died_32drse1Code;
