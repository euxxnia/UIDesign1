Text tension;
Happy un;
Happy happy;
Control in;
Control control;
Control led;
Button save;
Button info;
Button trace;

int unhappyST = 0;
int controlST = 0;
int tensionST = 0;

float targetScale;

String fontName2 = "Inter-Medium";
String fontName = "Arial";

boolean textActiveMode, happyActiveMode, controlActiveMode = false;
boolean saveBool = false;
boolean traceBool = false;

void setup() {
  size(960, 540);
  tension = new Text(70, "TENSION", createFont(fontName, 80));
  un = new Happy(70, "UN", createFont(fontName, 80));
  happy = new Happy(70, "HAPPY", createFont(fontName, 80));
  in = new Control(70, "IN-", createFont(fontName2, 60));
  control = new Control(70, "CONTROL", createFont(fontName2, 60));
  led = new Control(70, "LED", createFont(fontName2, 60));
  

}

void draw() {
  float controlLevel = 50;

  background(0);
  fill(255);

  // HAPPY
  textAlign(LEFT, CENTER);
  float unScale;
  float byControlScale=1;
  float happyX; // HAPPY 시작 X
  float unWidth;
  
    unWidth = unhappyST*60;
    happyX = unWidth;
    unScale = (unWidth / un.currentWidth);
    un.opacity = map(unWidth, 0, 250, 0, 255);

  float happyScale = (350-(unScale*un.currentWidth))/happy.currentWidth;
  
  if (happyScale>1) {
    PFont happyFont = createFont("HoboStd.otf", 80);
    un.font= happyFont;
    int changeS = 75;
    un.size = changeS;
    happy.size = changeS;
    happy.font= happyFont;
    tension.font= happyFont;
    tension.size = changeS;
    in.font = happyFont;
    in.size = changeS;
    control.size = changeS;
    led.size = changeS;
    control.font= happyFont;
    led.font = happyFont;
  } else if (happyScale<0.5) {
    PFont happyFont = createFont("CountryDiamonds.ttf", 80);
    un.font= happyFont;
    int changeS = 80;
    un.size = changeS;
    happy.size = changeS;
    happy.font= happyFont;
    tension.font= happyFont;
    tension.size = changeS;
    in.font = happyFont;
    in.size = changeS;
    control.size = changeS;
    led.size = changeS;
    control.font= happyFont;
    led.font = happyFont;
  } else {
    PFont happyFont = createFont("Old computer St.ttf", 80);
    un.font= happyFont;
    int changeS = 50;
    un.size = changeS;
    happy.size = changeS;
    happy.font= happyFont;
    tension.font= happyFont;
    tension.size = changeS;
    in.font = happyFont;
    in.size = changeS;
    control.size = changeS;
    led.size = changeS;
    control.font= happyFont;
    led.font = happyFont;
  }

  // TENSION (width: 355)

  fill(255);
  
  float targetHeight = map(tensionST, 0, 4, 350, 5);
  targetScale = (targetHeight / tension.currentHeight)*1.5;

  // CONTROL
  float inScale, controlScale, ledScale;
  controlLevel = map(controlST, 0, 4, 0, 100);
  byControlScale = map(controlLevel, 0, 100, 0.5, 1.8);
  inScale = map(controlLevel, 0, 100, 1, 0.1);
  ledScale = map(controlLevel, 100, 0, 1, 0.1);
  controlScale = (310-(inScale*in.currentWidth)-(ledScale*led.currentWidth))/control.currentWidth;

  changeGB(in, controlLevel);
  changeGB(control, controlLevel);
  changeGB(led, controlLevel);
  

    textAlign(CENTER);
    tension.scaleDraw(targetScale, width/2, height/2-10, 255);
    tension.scaleDraw(1, width/2, height/2-10, 40);
    textAlign(LEFT, BOTTOM);
    in.controlDraw((255-controlLevel*2.55), inScale*0.9, 2-byControlScale, 324, 418);
    control.controlDraw(255, controlScale*0.9, 2-byControlScale, 324+in.currentWidth*inScale, 418);
    textAlign(RIGHT, BOTTOM);
    led.controlDraw(controlLevel*2.55, ledScale*0.8, 2-byControlScale, 635, 418);
    textAlign(LEFT, TOP);
    un.happyDraw(unScale, byControlScale, 324.5, un.startY); // UN 그리기
    happy.happyDraw(happyScale, byControlScale, 324.5+(unScale*un.currentWidth*0.87), un.startY); // HAPPY 그리기


void changeGB(Control control, float level) {
  control.greenblue = 255 - level*2.55;
}

void changeWeight(Control control, float level) {
  float distance = abs(level-50);
  if (distance>20 && distance<35) {
    control.font = createFont("Inter-Bold", 60);
  } else if (distance>=35) {
    control.font = createFont("Inter-Black", 60);
  } else if (distance<5) {
    control.font = createFont("Inter-Light", 60);
  } else {
    control.font = createFont("Inter-Medium", 60);
  }
  //print(distance+"\n");
}
