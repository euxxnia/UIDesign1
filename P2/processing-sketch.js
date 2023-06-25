
// forUI.pde 코드
const forUICode = `
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

  // 필요한 변수를 sessionStorage에서 가져와서 초기화합니다.
  var selectedImages = JSON.parse(sessionStorage.getItem("selectedImages"));
  var value1 = selectedImages[0] || 0;
  var value2 = selectedImages[1] || 0;
  var value3 = selectedImages[2] || 0;
  // 변수를 프로세싱 파일의 전역 변수에 할당합니다.
  unhappyST = value1;
  tensionST = value2;
  controlST = value3;
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

}

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
`;

// Control.pde 코드
const controlCode = `
class Control {
  int size;
  float greenblue, currentWidth,currentHeight, savedScaleFactor, opacity;
  float startY, endY;
  
  String text;
  PFont font;
  
  Control(int size, String text, PFont font){
    this.startY = 375;
    this.endY = 415;
    this.size = size;
    this.text = text;
    this.font = font;
    this.savedScaleFactor = 1;
    this.opacity = 255;
    this.greenblue = 255;
    textSize(this.size);
    textFont(this.font);
    this.currentWidth = textWidth(text);
    this.currentHeight = textAscent() + textDescent();
  }
  
  void controlDraw(float opacity, float scale1, float scale2, float x, float y){
    pushMatrix(); // 2D 그래픽 변환을 관리하기 위한 함수. 변환 행렬을 스택에 저장
    translate(x, y); // 그래픽 요소를 x,y축 방향으로 이동시키는 함수
    scale(scale1, scale2);
    
    this.opacity = opacity;
    
    textFont(this.font);
    textSize(this.size);
    textLeading(this.size);
    
    stroke(255,this.greenblue,this.greenblue,this.opacity);
    fill(255,this.greenblue,this.greenblue,this.opacity);
    
    text(this.text, 0,0);
    
    popMatrix();
  }
  
  float changeWidth(float targetWidth){
    float scaleFactor = targetWidth / this.currentWidth;
    return scaleFactor;
  }
  
  float changeHeight(float targetHeight){
    float scaleFactor = targetHeight / this.currentHeight;
    return scaleFactor;
  }
}
`;

// Happy.pde 코드
const happyCode = `
class Happy {
  int size;
  float currentWidth, savedScaleFactor, opacity;
  float startY, endY;
  
  String text;
  PFont font;

  
  Happy(int size, String text, PFont font){
    this.startY = 272;
    this.endY = 350;
    this.size = size;
    this.text = text;
    this.font = font;
    this.savedScaleFactor = 1;
    this.opacity = 255;
    textSize(this.size);
    textFont(this.font);
    this.currentWidth = textWidth(text);
  }
  
  void happyDraw(float scale1, float scale2, float x, float y){
    pushMatrix(); // 2D 그래픽 변환을 관리하기 위한 함수. 변환 행렬을 스택에 저장
    translate(x, y); // 그래픽 요소를 x,y축 방향으로 이동시키는 함수
    scale(scale1,scale2);
    
    textFont(this.font);
    textSize(this.size);
    textLeading(this.size);
    fill(255,255,255,this.opacity);
  
    
    text(this.text, 0,0);
    
    popMatrix();
  }
  
  float changeWidth(float targetWidth){
    float scaleFactor = targetWidth / this.currentWidth;
    return scaleFactor;
  }
}
`;

// Text.pde 코드
const textCode = `
class Text {

  PGraphics pg = createGraphics(320, 270); // PGraphics 객체
  PImage textImage = null; // 텍스트 이미지 변수


  int size;
  float currentHeight;
  float savedScaleFactor;
  float lowY, highY;

  String text;
  PFont font;

  Text(int size, String text, PFont font) {
    this.highY = 225;
    this.lowY = 275;
    this.size = size;
    this.text = text;
    this.font = font;
    this.savedScaleFactor = 1;
    textSize(this.size);
    textFont(this.font);
    this.currentHeight = textAscent() + textDescent(); // 현재 설정된 텍스트 크기에 대한 ascent(상승) 값 + descent(하강) 값 -> 크기와 폰트에 따라 달라짐
  }

  void scaleDraw(float scale, float x, float y, int opacity) {
    pushMatrix(); // 2D 그래픽 변환을 관리하기 위한 함수. 변환 행렬을 스택에 저장
    translate(x, y); // 그래픽 요소를 x,y축 방향으로 이동시키는 함수
    scale(1, scale);

    textFont(this.font);
    textSize(this.size);
    textLeading(this.size*scale); // 텍스트의 줄간격 설정. 기본: textSize()*1.25

    fill(255, 255, 255, opacity);
    text(this.text, 0, 0);

    popMatrix();
  }

  float changeHeight(float targetHeight) {
    float scaleFactor = targetHeight / this.currentHeight;
    return scaleFactor;
  }
}
`;

// 프로세싱 인스턴스 생성 및 설정
const canvas = document.getElementById("myCanvas"); // 프로세싱 스케치를 렌더링할 캔버스 요소
const processingInstance = new Processing(canvas, function (p) {
  p.setup = function () {
    eval(forUICode); // forUI.pde 코드 실행
    eval(controlCode); // Control.pde 코드 실행
    eval(happyCode); // Happy.pde 코드 실행
    eval(textCode); // Text.pde 코드 실행

    forUI.setup(); // forUI.pde의 setup() 함수 호출
  };

  p.draw = function () {
    eval(forUICode); // forUI.pde 코드 실행
    eval(controlCode); // Control.pde 코드 실행
    eval(happyCode); // Happy.pde 코드 실행
    eval(textCode); // Text.pde 코드 실행
    forUI.draw(); // forUI.pde의 draw() 함수 호출
  };
});
