gdjs._1099_1075_1088_1072Code = {};
gdjs._1099_1075_1088_1072Code.localVariables = [];
gdjs._1099_1075_1088_1072Code.GDclickObjects1= [];
gdjs._1099_1075_1088_1072Code.GDclickObjects2= [];
gdjs._1099_1075_1088_1072Code.GDclickObjects3= [];
gdjs._1099_1075_1088_1072Code.GDmaniObjects1= [];
gdjs._1099_1075_1088_1072Code.GDmaniObjects2= [];
gdjs._1099_1075_1088_1072Code.GDmaniObjects3= [];
gdjs._1099_1075_1088_1072Code.GDmanitxtObjects1= [];
gdjs._1099_1075_1088_1072Code.GDmanitxtObjects2= [];
gdjs._1099_1075_1088_1072Code.GDmanitxtObjects3= [];
gdjs._1099_1075_1088_1072Code.GDbumObjects1= [];
gdjs._1099_1075_1088_1072Code.GDbumObjects2= [];
gdjs._1099_1075_1088_1072Code.GDbumObjects3= [];
gdjs._1099_1075_1088_1072Code.GDbumtxtObjects1= [];
gdjs._1099_1075_1088_1072Code.GDbumtxtObjects2= [];
gdjs._1099_1075_1088_1072Code.GDbumtxtObjects3= [];
gdjs._1099_1075_1088_1072Code.GDkarmiObjects1= [];
gdjs._1099_1075_1088_1072Code.GDkarmiObjects2= [];
gdjs._1099_1075_1088_1072Code.GDkarmiObjects3= [];
gdjs._1099_1075_1088_1072Code.GDNewSpriteObjects1= [];
gdjs._1099_1075_1088_1072Code.GDNewSpriteObjects2= [];
gdjs._1099_1075_1088_1072Code.GDNewSpriteObjects3= [];
gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects3= [];
gdjs._1099_1075_1088_1072Code.GDNewSprite2Objects1= [];
gdjs._1099_1075_1088_1072Code.GDNewSprite2Objects2= [];
gdjs._1099_1075_1088_1072Code.GDNewSprite2Objects3= [];
gdjs._1099_1075_1088_1072Code.GDkarmi2Objects1= [];
gdjs._1099_1075_1088_1072Code.GDkarmi2Objects2= [];
gdjs._1099_1075_1088_1072Code.GDkarmi2Objects3= [];
gdjs._1099_1075_1088_1072Code.GDgrabitelObjects1= [];
gdjs._1099_1075_1088_1072Code.GDgrabitelObjects2= [];
gdjs._1099_1075_1088_1072Code.GDgrabitelObjects3= [];
gdjs._1099_1075_1088_1072Code.GDtimurObjects1= [];
gdjs._1099_1075_1088_1072Code.GDtimurObjects2= [];
gdjs._1099_1075_1088_1072Code.GDtimurObjects3= [];
gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1= [];
gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects2= [];
gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects3= [];
gdjs._1099_1075_1088_1072Code.GDkarmi3Objects1= [];
gdjs._1099_1075_1088_1072Code.GDkarmi3Objects2= [];
gdjs._1099_1075_1088_1072Code.GDkarmi3Objects3= [];
gdjs._1099_1075_1088_1072Code.GDoguzokObjects1= [];
gdjs._1099_1075_1088_1072Code.GDoguzokObjects2= [];
gdjs._1099_1075_1088_1072Code.GDoguzokObjects3= [];
gdjs._1099_1075_1088_1072Code.GDoguzoktxtObjects1= [];
gdjs._1099_1075_1088_1072Code.GDoguzoktxtObjects2= [];
gdjs._1099_1075_1088_1072Code.GDoguzoktxtObjects3= [];
gdjs._1099_1075_1088_1072Code.GDcleikObjects1= [];
gdjs._1099_1075_1088_1072Code.GDcleikObjects2= [];
gdjs._1099_1075_1088_1072Code.GDcleikObjects3= [];
gdjs._1099_1075_1088_1072Code.GDgrabObjects1= [];
gdjs._1099_1075_1088_1072Code.GDgrabObjects2= [];
gdjs._1099_1075_1088_1072Code.GDgrabObjects3= [];


gdjs._1099_1075_1088_1072Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "timer", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}}

}


};gdjs._1099_1075_1088_1072Code.asyncCallback9616796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1099_1075_1088_1072Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("bumtxt"), gdjs._1099_1075_1088_1072Code.GDbumtxtObjects3);

{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDbumtxtObjects3.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDbumtxtObjects3[i].hide();
}
}gdjs._1099_1075_1088_1072Code.localVariables.length = 0;
}
gdjs._1099_1075_1088_1072Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._1099_1075_1088_1072Code.localVariables);
/* Don't save bumtxt as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs._1099_1075_1088_1072Code.asyncCallback9616796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._1099_1075_1088_1072Code.asyncCallback9616604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1099_1075_1088_1072Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("bum"), gdjs._1099_1075_1088_1072Code.GDbumObjects2);

{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDbumObjects2.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDbumObjects2[i].hide();
}
}
{ //Subevents
gdjs._1099_1075_1088_1072Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._1099_1075_1088_1072Code.localVariables.length = 0;
}
gdjs._1099_1075_1088_1072Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1099_1075_1088_1072Code.localVariables);
for (const obj of gdjs._1099_1075_1088_1072Code.GDbumObjects1) asyncObjectsList.addObject("bum", obj);
for (const obj of gdjs._1099_1075_1088_1072Code.GDbumtxtObjects1) asyncObjectsList.addObject("bumtxt", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs._1099_1075_1088_1072Code.asyncCallback9616604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._1099_1075_1088_1072Code.asyncCallback9521868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1099_1075_1088_1072Code.localVariables);
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}gdjs._1099_1075_1088_1072Code.localVariables.length = 0;
}
gdjs._1099_1075_1088_1072Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1099_1075_1088_1072Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs._1099_1075_1088_1072Code.asyncCallback9521868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._1099_1075_1088_1072Code.asyncCallback9526212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1099_1075_1088_1072Code.localVariables);
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}gdjs._1099_1075_1088_1072Code.localVariables.length = 0;
}
gdjs._1099_1075_1088_1072Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1099_1075_1088_1072Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs._1099_1075_1088_1072Code.asyncCallback9526212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._1099_1075_1088_1072Code.asyncCallback9634356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1099_1075_1088_1072Code.localVariables);
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}gdjs._1099_1075_1088_1072Code.localVariables.length = 0;
}
gdjs._1099_1075_1088_1072Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1099_1075_1088_1072Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs._1099_1075_1088_1072Code.asyncCallback9634356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._1099_1075_1088_1072Code.asyncCallback9578804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1099_1075_1088_1072Code.localVariables);
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}gdjs._1099_1075_1088_1072Code.localVariables.length = 0;
}
gdjs._1099_1075_1088_1072Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1099_1075_1088_1072Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs._1099_1075_1088_1072Code.asyncCallback9578804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._1099_1075_1088_1072Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1, gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects2.length;i<l;++i) {
    if ( gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects2[k] = gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects2[i];
        ++k;
    }
}
gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < 100;
}
if (isConditionTrue_0) {
/* Reuse gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("karmi2"), gdjs._1099_1075_1088_1072Code.GDkarmi2Objects2);
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects2.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects2[i].setY(1500);
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer2");
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDkarmi2Objects2.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDkarmi2Objects2[i].getBehavior("Text").setText("у тибя не хватила хамяк деняг. и тимур ушол.");
}
}
{ //Subevents
gdjs._1099_1075_1088_1072Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1.length;i<l;++i) {
    if ( gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1[k] = gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1[i];
        ++k;
    }
}
gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 99;
}
if (isConditionTrue_0) {
/* Reuse gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1 */
{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1[i].setY(1500);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(100);
}}

}


};gdjs._1099_1075_1088_1072Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "mechanical-full-energetic-amen-break-drums-loop_172bpm_D_minor.wav", 1, true, 70, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cleik"), gdjs._1099_1075_1088_1072Code.GDcleikObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1099_1075_1088_1072Code.GDcleikObjects1.length;i<l;++i) {
    if ( gdjs._1099_1075_1088_1072Code.GDcleikObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1099_1075_1088_1072Code.GDcleikObjects1[k] = gdjs._1099_1075_1088_1072Code.GDcleikObjects1[i];
        ++k;
    }
}
gdjs._1099_1075_1088_1072Code.GDcleikObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("mani"), gdjs._1099_1075_1088_1072Code.GDmaniObjects1);
{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDmaniObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDmaniObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cleik"), gdjs._1099_1075_1088_1072Code.GDcleikObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1099_1075_1088_1072Code.GDcleikObjects1.length;i<l;++i) {
    if ( !(gdjs._1099_1075_1088_1072Code.GDcleikObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs._1099_1075_1088_1072Code.GDcleikObjects1[k] = gdjs._1099_1075_1088_1072Code.GDcleikObjects1[i];
        ++k;
    }
}
gdjs._1099_1075_1088_1072Code.GDcleikObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._1099_1075_1088_1072Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1);
gdjs.copyArray(runtimeScene.getObjects("TimurButton"), gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("bum"), gdjs._1099_1075_1088_1072Code.GDbumObjects1);
gdjs.copyArray(runtimeScene.getObjects("bumtxt"), gdjs._1099_1075_1088_1072Code.GDbumtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("grab"), gdjs._1099_1075_1088_1072Code.GDgrabObjects1);
{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDbumObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDbumObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDbumtxtObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDbumtxtObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1[i].setY(1500);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer2");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer");
}{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1[i].setY(1500);
}
}{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDgrabObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDgrabObjects1[i].setY(1555);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bum"), gdjs._1099_1075_1088_1072Code.GDbumObjects1);
gdjs.copyArray(runtimeScene.getObjects("bumtxt"), gdjs._1099_1075_1088_1072Code.GDbumtxtObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "silnyiy-raskatistyiy-vzryiv.mp3", false, 90, 1);
}{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDbumObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDbumObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(6).sub(100);
}{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDbumtxtObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDbumtxtObjects1[i].hide(false);
}
}
{ //Subevents
gdjs._1099_1075_1088_1072Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "timer2", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 14;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1);
{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1[i].setY(787);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 17;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1[i].setY(1500);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer2");
}
{ //Subevents
gdjs._1099_1075_1088_1072Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1 */
{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1[i].setY(1500);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "timer3", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) > 19;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("grab"), gdjs._1099_1075_1088_1072Code.GDgrabObjects1);
{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDgrabObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDgrabObjects1[i].setY(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) > 24;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1);
gdjs.copyArray(runtimeScene.getObjects("karmi2"), gdjs._1099_1075_1088_1072Code.GDkarmi2Objects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1[i].setY(1500);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer2");
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDkarmi2Objects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDkarmi2Objects1[i].getBehavior("Text").setText("грабитель украл у тибя всьо. канец.");
}
}
{ //Subevents
gdjs._1099_1075_1088_1072Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("grab"), gdjs._1099_1075_1088_1072Code.GDgrabObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1099_1075_1088_1072Code.GDgrabObjects1.length;i<l;++i) {
    if ( gdjs._1099_1075_1088_1072Code.GDgrabObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1099_1075_1088_1072Code.GDgrabObjects1[k] = gdjs._1099_1075_1088_1072Code.GDgrabObjects1[i];
        ++k;
    }
}
gdjs._1099_1075_1088_1072Code.GDgrabObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1099_1075_1088_1072Code.GDgrabObjects1 */
{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDgrabObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDgrabObjects1[i].setY(1555);
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "timer4", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) > 29;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TimurButton"), gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1);
{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1[i].setY(1066);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) > 35;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TimurButton"), gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("karmi2"), gdjs._1099_1075_1088_1072Code.GDkarmi2Objects1);
{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1[i].setY(1500);
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer2");
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}{for(var i = 0, len = gdjs._1099_1075_1088_1072Code.GDkarmi2Objects1.length ;i < len;++i) {
    gdjs._1099_1075_1088_1072Code.GDkarmi2Objects1[i].getBehavior("Text").setText("ты не аддал тимуру 100 хамяк деняг. и он ушол.");
}
}
{ //Subevents
gdjs._1099_1075_1088_1072Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TimurButton"), gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1.length;i<l;++i) {
    if ( gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1[k] = gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1[i];
        ++k;
    }
}
gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._1099_1075_1088_1072Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "save", 0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("ThisGame", "Money", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("ThisGame", "Money", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6));
}}

}


};

gdjs._1099_1075_1088_1072Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1099_1075_1088_1072Code.GDclickObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDclickObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDclickObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDmaniObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDmaniObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDmaniObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDmanitxtObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDmanitxtObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDmanitxtObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDbumObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDbumObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDbumObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDbumtxtObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDbumtxtObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDbumtxtObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmiObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmiObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmiObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDNewSpriteObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDNewSpriteObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDNewSpriteObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDNewSprite2Objects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDNewSprite2Objects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDNewSprite2Objects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmi2Objects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmi2Objects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmi2Objects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDgrabitelObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDgrabitelObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDgrabitelObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDtimurObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDtimurObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDtimurObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmi3Objects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmi3Objects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmi3Objects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDoguzokObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDoguzokObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDoguzokObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDoguzoktxtObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDoguzoktxtObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDoguzoktxtObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDcleikObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDcleikObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDcleikObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDgrabObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDgrabObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDgrabObjects3.length = 0;

gdjs._1099_1075_1088_1072Code.eventsList8(runtimeScene);
gdjs._1099_1075_1088_1072Code.GDclickObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDclickObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDclickObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDmaniObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDmaniObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDmaniObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDmanitxtObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDmanitxtObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDmanitxtObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDbumObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDbumObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDbumObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDbumtxtObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDbumtxtObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDbumtxtObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmiObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmiObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmiObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDNewSpriteObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDNewSpriteObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDNewSpriteObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDFloatingOutButtonDarkBlueObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDNewSprite2Objects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDNewSprite2Objects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDNewSprite2Objects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmi2Objects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmi2Objects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmi2Objects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDgrabitelObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDgrabitelObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDgrabitelObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDtimurObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDtimurObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDtimurObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDTimurButtonObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmi3Objects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmi3Objects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDkarmi3Objects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDoguzokObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDoguzokObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDoguzokObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDoguzoktxtObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDoguzoktxtObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDoguzoktxtObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDcleikObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDcleikObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDcleikObjects3.length = 0;
gdjs._1099_1075_1088_1072Code.GDgrabObjects1.length = 0;
gdjs._1099_1075_1088_1072Code.GDgrabObjects2.length = 0;
gdjs._1099_1075_1088_1072Code.GDgrabObjects3.length = 0;


return;

}

gdjs['_1099_1075_1088_1072Code'] = gdjs._1099_1075_1088_1072Code;
