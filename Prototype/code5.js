gdjs.Cutscene_321Code = {};
gdjs.Cutscene_321Code.localVariables = [];
gdjs.Cutscene_321Code.GDNewVideoObjects1= [];
gdjs.Cutscene_321Code.GDNewVideoObjects2= [];


gdjs.Cutscene_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Cutscene_321Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.Cutscene_321Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Cutscene_321Code.GDNewVideoObjects1[i].play();
}
}}

}


};

gdjs.Cutscene_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cutscene_321Code.GDNewVideoObjects1.length = 0;
gdjs.Cutscene_321Code.GDNewVideoObjects2.length = 0;

gdjs.Cutscene_321Code.eventsList0(runtimeScene);

return;

}

gdjs['Cutscene_321Code'] = gdjs.Cutscene_321Code;
