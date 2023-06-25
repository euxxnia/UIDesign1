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

  void saveTension(float scale, float x, float y, int opacity, String date) {
    // PGraphics 객체에 텍스트 그리기
    pg.beginDraw();
    pg.background(0); // 배경을 검은색으로 설정
    pg.fill(255, 255, opacity); // 텍스트 색상을 흰색으로 설정
    pg.translate(x, y);
    pg.scale(1, scale);
    pg.textLeading(this.size*scale);
    pg.textFont(this.font);
    pg.textSize(this.size);
    //pg.textSize(51);
    pg.text(date, 0, 0);
    pg.endDraw();

    // PGraphics 객체를 이미지로 변환하여 저장
    textImage = pg.get();
    tensions.add(textImage);
    
    print(tensions.size());
  }

  float changeHeight(float targetHeight) {
    float scaleFactor = targetHeight / this.currentHeight;
    return scaleFactor;
  }
}
