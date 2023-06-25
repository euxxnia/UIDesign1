class Happy{
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
