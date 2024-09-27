gdjs.Getting_32UpCode = {};
gdjs.Getting_32UpCode.localVariables = [];
gdjs.Getting_32UpCode.GDNewSpriteObjects1= [];
gdjs.Getting_32UpCode.GDNewSpriteObjects2= [];
gdjs.Getting_32UpCode.GDNewSprite1Objects1= [];
gdjs.Getting_32UpCode.GDNewSprite1Objects2= [];
gdjs.Getting_32UpCode.GDNewSprite2Objects1= [];
gdjs.Getting_32UpCode.GDNewSprite2Objects2= [];
gdjs.Getting_32UpCode.GDNewSprite7Objects1= [];
gdjs.Getting_32UpCode.GDNewSprite7Objects2= [];


gdjs.Getting_32UpCode.eventsList0 = function(runtimeScene) {

};gdjs.Getting_32UpCode.eventsList1 = function(runtimeScene) {

};gdjs.Getting_32UpCode.mapOfGDgdjs_9546Getting_959532UpCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Getting_32UpCode.GDNewSprite2Objects1});
gdjs.Getting_32UpCode.mapOfGDgdjs_9546Getting_959532UpCode_9546GDNewSprite1Objects1Objects = Hashtable.newFrom({"NewSprite1": gdjs.Getting_32UpCode.GDNewSprite1Objects1});
gdjs.Getting_32UpCode.mapOfGDgdjs_9546Getting_959532UpCode_9546GDNewSprite1Objects1Objects = Hashtable.newFrom({"NewSprite1": gdjs.Getting_32UpCode.GDNewSprite1Objects1});
gdjs.Getting_32UpCode.mapOfGDgdjs_9546Getting_959532UpCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Getting_32UpCode.GDNewSprite2Objects1});
gdjs.Getting_32UpCode.mapOfGDgdjs_9546Getting_959532UpCode_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.Getting_32UpCode.GDNewSprite7Objects1});
gdjs.Getting_32UpCode.eventsList2 = function(runtimeScene) {

{


gdjs.Getting_32UpCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Getting_32UpCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Getting_32UpCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Getting_32UpCode.GDNewSprite2Objects1[i].addForce(60, 0, 0);
}
}{for(var i = 0, len = gdjs.Getting_32UpCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Getting_32UpCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Walk Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Getting_32UpCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Getting_32UpCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Getting_32UpCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Idle Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Getting_32UpCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Getting_32UpCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Getting_32UpCode.GDNewSprite2Objects1[i].addForce(-(60), 0, 0);
}
}{for(var i = 0, len = gdjs.Getting_32UpCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Getting_32UpCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Walk Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Getting_32UpCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Getting_32UpCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Getting_32UpCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Idle Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Getting_32UpCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Getting_32UpCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Getting_32UpCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Idle Right");
}
}}

}


{


gdjs.Getting_32UpCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite1"), gdjs.Getting_32UpCode.GDNewSprite1Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Getting_32UpCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Getting_32UpCode.mapOfGDgdjs_9546Getting_959532UpCode_9546GDNewSprite2Objects1Objects, gdjs.Getting_32UpCode.mapOfGDgdjs_9546Getting_959532UpCode_9546GDNewSprite1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Getting_32UpCode.GDNewSprite1Objects1 */
/* Reuse gdjs.Getting_32UpCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Getting_32UpCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Getting_32UpCode.GDNewSprite2Objects1[i].separateFromObjectsList(gdjs.Getting_32UpCode.mapOfGDgdjs_9546Getting_959532UpCode_9546GDNewSprite1Objects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Getting_32UpCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Getting_32UpCode.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Getting_32UpCode.mapOfGDgdjs_9546Getting_959532UpCode_9546GDNewSprite2Objects1Objects, gdjs.Getting_32UpCode.mapOfGDgdjs_9546Getting_959532UpCode_9546GDNewSprite7Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene 1", false);
}}

}


};

gdjs.Getting_32UpCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Getting_32UpCode.GDNewSpriteObjects1.length = 0;
gdjs.Getting_32UpCode.GDNewSpriteObjects2.length = 0;
gdjs.Getting_32UpCode.GDNewSprite1Objects1.length = 0;
gdjs.Getting_32UpCode.GDNewSprite1Objects2.length = 0;
gdjs.Getting_32UpCode.GDNewSprite2Objects1.length = 0;
gdjs.Getting_32UpCode.GDNewSprite2Objects2.length = 0;
gdjs.Getting_32UpCode.GDNewSprite7Objects1.length = 0;
gdjs.Getting_32UpCode.GDNewSprite7Objects2.length = 0;

gdjs.Getting_32UpCode.eventsList2(runtimeScene);

return;

}

gdjs['Getting_32UpCode'] = gdjs.Getting_32UpCode;
