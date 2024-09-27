gdjs.Stage_32Passed_32drse1Code = {};
gdjs.Stage_32Passed_32drse1Code.localVariables = [];
gdjs.Stage_32Passed_32drse1Code.GDNewSpriteObjects1= [];
gdjs.Stage_32Passed_32drse1Code.GDNewSpriteObjects2= [];
gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1= [];
gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects2= [];


gdjs.Stage_32Passed_32drse1Code.eventsList0 = function(runtimeScene) {

};gdjs.Stage_32Passed_32drse1Code.eventsList1 = function(runtimeScene) {

{


gdjs.Stage_32Passed_32drse1Code.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1[k] = gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("hovered");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( !(gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1[k] = gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("idol");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1[k] = gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dream Sequence 1", false);
}}

}


};

gdjs.Stage_32Passed_32drse1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Stage_32Passed_32drse1Code.GDNewSpriteObjects1.length = 0;
gdjs.Stage_32Passed_32drse1Code.GDNewSpriteObjects2.length = 0;
gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects1.length = 0;
gdjs.Stage_32Passed_32drse1Code.GDNewSprite2Objects2.length = 0;

gdjs.Stage_32Passed_32drse1Code.eventsList1(runtimeScene);

return;

}

gdjs['Stage_32Passed_32drse1Code'] = gdjs.Stage_32Passed_32drse1Code;
