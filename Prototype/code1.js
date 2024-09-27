gdjs.Dream_32Sequence_321Code = {};
gdjs.Dream_32Sequence_321Code.localVariables = [];
gdjs.Dream_32Sequence_321Code.GDNewSpriteObjects1= [];
gdjs.Dream_32Sequence_321Code.GDNewSpriteObjects2= [];
gdjs.Dream_32Sequence_321Code.GDNewSpriteObjects3= [];
gdjs.Dream_32Sequence_321Code.GDNewTiledSpriteObjects1= [];
gdjs.Dream_32Sequence_321Code.GDNewTiledSpriteObjects2= [];
gdjs.Dream_32Sequence_321Code.GDNewTiledSpriteObjects3= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects2= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects3= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects1= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects2= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects3= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects2= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects3= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects1= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects2= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects3= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite6Objects1= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite6Objects2= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite6Objects3= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite7Objects1= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite7Objects2= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite7Objects3= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects1= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects2= [];
gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects3= [];


gdjs.Dream_32Sequence_321Code.eventsList0 = function(runtimeScene) {

};gdjs.Dream_32Sequence_321Code.eventsList1 = function(runtimeScene) {

};gdjs.Dream_32Sequence_321Code.asyncCallback11337652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Dream_32Sequence_321Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects3);

{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects3.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects3[i].hide();
}
}gdjs.Dream_32Sequence_321Code.localVariables.length = 0;
}
gdjs.Dream_32Sequence_321Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Dream_32Sequence_321Code.localVariables);
for (const obj of gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects2) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Dream_32Sequence_321Code.asyncCallback11337652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dream_32Sequence_321Code.asyncCallback11337036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Dream_32Sequence_321Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects2);

{gdjs.evtTools.sound.playSound(runtimeScene, "blip-131856.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.Dream_32Sequence_321Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Dream_32Sequence_321Code.localVariables.length = 0;
}
gdjs.Dream_32Sequence_321Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Dream_32Sequence_321Code.localVariables);
for (const obj of gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects1) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Dream_32Sequence_321Code.asyncCallback11337036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1});
gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects1});
gdjs.Dream_32Sequence_321Code.asyncCallback11340092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Dream_32Sequence_321Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite5"), gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("NewSprite8"), gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects2);

{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects2.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects2[i].deleteFromScene(runtimeScene);
}
}gdjs.Dream_32Sequence_321Code.localVariables.length = 0;
}
gdjs.Dream_32Sequence_321Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Dream_32Sequence_321Code.localVariables);
for (const obj of gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects1) asyncObjectsList.addObject("NewSprite5", obj);
for (const obj of gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects1) asyncObjectsList.addObject("NewSprite8", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Dream_32Sequence_321Code.asyncCallback11340092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dream_32Sequence_321Code.eventsList5 = function(runtimeScene) {

};gdjs.Dream_32Sequence_321Code.asyncCallback11341740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Dream_32Sequence_321Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects2);

{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationName("Idle Right");
}
}gdjs.Dream_32Sequence_321Code.localVariables.length = 0;
}
gdjs.Dream_32Sequence_321Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Dream_32Sequence_321Code.localVariables);
for (const obj of gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Dream_32Sequence_321Code.asyncCallback11341740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dream_32Sequence_321Code.eventsList7 = function(runtimeScene) {

};gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1});
gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects1});
gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1});
gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1});
gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1});
gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1});
gdjs.Dream_32Sequence_321Code.asyncCallback11346668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Dream_32Sequence_321Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite4"), gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects2);

{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "taco-bell-bong-sfx.mp3", false, 100, 1);
}gdjs.Dream_32Sequence_321Code.localVariables.length = 0;
}
gdjs.Dream_32Sequence_321Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Dream_32Sequence_321Code.localVariables);
for (const obj of gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1) asyncObjectsList.addObject("NewSprite4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Dream_32Sequence_321Code.asyncCallback11346668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Dream_32Sequence_321Code.eventsList9 = function(runtimeScene) {

};gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1});
gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Dream_32Sequence_321Code.GDNewSprite6Objects1});
gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Dream_32Sequence_321Code.GDNewSprite6Objects1});
gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1});
gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.Dream_32Sequence_321Code.GDNewSprite7Objects1});
gdjs.Dream_32Sequence_321Code.eventsList10 = function(runtimeScene) {

{


gdjs.Dream_32Sequence_321Code.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1[i].addForce(60, 0, 0);
}
}{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Walk Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Idle Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Idle Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1[i].addForce(-(60), 0, 0);
}
}{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Walk Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Idle Right");
}
}}

}


{


gdjs.Dream_32Sequence_321Code.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects1[i].hide();
}
}
{ //Subevents
gdjs.Dream_32Sequence_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects1);
{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite2Objects1Objects, gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11339156);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects1);
{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "blip-131856.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Dream_32Sequence_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Dream_32Sequence_321Code.eventsList5(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Swinghammer");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "door-slam-172171.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Dream_32Sequence_321Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.Dream_32Sequence_321Code.eventsList7(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite2Objects1Objects, gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1);
/* Reuse gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects1 */
{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1[i].addForce(-(60), 0, 1);
}
}{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("Walk Left");
}
}{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite2Objects1Objects, gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "You Died drse1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite2Objects1Objects, gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("Killed");
}
}{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1[i].clearForces();
}
}
{ //Subevents
gdjs.Dream_32Sequence_321Code.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.Dream_32Sequence_321Code.eventsList9(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Dream_32Sequence_321Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite2Objects1Objects, gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1 */
/* Reuse gdjs.Dream_32Sequence_321Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1[i].separateFromObjectsList(gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite6Objects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Dream_32Sequence_321Code.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite2Objects1Objects, gdjs.Dream_32Sequence_321Code.mapOfGDgdjs_9546Dream_959532Sequence_9595321Code_9546GDNewSprite7Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage Passed drse1", false);
}}

}


};

gdjs.Dream_32Sequence_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dream_32Sequence_321Code.GDNewSpriteObjects1.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSpriteObjects2.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSpriteObjects3.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects1.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects2.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite2Objects3.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects1.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects2.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite3Objects3.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects1.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects2.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite4Objects3.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects1.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects2.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite5Objects3.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite6Objects1.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite6Objects2.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite6Objects3.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite7Objects1.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite7Objects2.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite7Objects3.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects1.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects2.length = 0;
gdjs.Dream_32Sequence_321Code.GDNewSprite8Objects3.length = 0;

gdjs.Dream_32Sequence_321Code.eventsList10(runtimeScene);

return;

}

gdjs['Dream_32Sequence_321Code'] = gdjs.Dream_32Sequence_321Code;
