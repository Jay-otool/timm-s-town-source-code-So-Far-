gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.GDNewVideoObjects1= [];
gdjs.IntroCode.GDNewVideoObjects2= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

};gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


gdjs.IntroCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.IntroCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.IntroCode.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDNewVideoObjects1[k] = gdjs.IntroCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dream Sequence 1", false);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDNewVideoObjects1.length = 0;
gdjs.IntroCode.GDNewVideoObjects2.length = 0;

gdjs.IntroCode.eventsList1(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
