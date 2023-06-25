class Control{
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
  
  //void print_(){
  //  print(this.font);
  //}
}
