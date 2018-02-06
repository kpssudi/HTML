function init(){

	var canvas = document.getElementById("canvas");
	if(canvas.getContext){
	
		// The ctx object provides functions to paint on the canvas 
		var ctx = canvas.getContext("2d");
		
		// Pick the color to use
		ctx.fillStyle = "#FAEBD7";
		
		// Draw a rectangle starting in the upper left corner of the canvas
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		// Change the draw color
		ctx.fillStyle = "#AF002A";
		
		// Draw a rectangle starting 100 down and 100 in with width
		// and height of 50px
		ctx.fillRect(100, 100, 50, 50);
		
		// You can define a stroke width and color and draw it without a fill
		ctx.lineWidth = 5;
		ctx.strokeStyle = "#A4C639";
		ctx.strokeRect(100, 100, 50, 50);
		
		ctx.fillStyle = "#00308F";
		
		// Says that we want to start drawing a path
		ctx.beginPath();
		
		// Draw an arc / circle (x, y, radius, startAngle, endAngle, direction)
		// Start and end angles are set as radians, but a start of 0 and an
		// end of Math.PI*2 gives you a circle
		// true is counterclockwise and false is clockwise
		ctx.arc(200, 200, 50, 0, Math.PI*2, true);
		
		// Paints the defined shape on the canvas
		ctx.fill();
		
		ctx.fillStyle = "#3B444B";
		ctx.beginPath();
		
		// To draw polygons you move to a starting x y and then use lineTo
		// To draw the other lines followed by closePath
		ctx.moveTo(350, 200);
		ctx.lineTo(400, 50);
		ctx.lineTo(450, 200);
		ctx.closePath();
		ctx.fill();
		
		// You can apply strokes to polygons and circles as well
		ctx.strokeStyle = "#A4C639";
		ctx.beginPath();
		ctx.moveTo(350, 200);
		ctx.lineTo(400, 50);
		ctx.lineTo(450, 200);
		ctx.closePath();
		ctx.stroke();
		
		// You can create gradient fills (top / left to bottom / right)
		var linGrad = ctx.createLinearGradient(400, 100, 500, 500);
		
		// Add the colors and their position in the gradient
		linGrad.addColorStop(0, "#8DB600");
		linGrad.addColorStop(0.5, "#9966CC");
		linGrad.addColorStop(1, "#7C0A02");
		
		ctx.fillStyle = linGrad;
		
		// You could also define the color RGB and opacity for a fill
		// ctx.fillStyle = "rgba(10, 150, 255, 0.5)";
		
		ctx.fillRect(400, 100, 100, 100);
		
		// Create a radial gradient (starting circle x, y, radius - 
		// ending circle x, y, radius )
		var radGrad = ctx.createRadialGradient(275, 250, 5, 290, 260, 100);
		radGrad.addColorStop(0,"red");
		radGrad.addColorStop(1,"white");
		ctx.fillStyle=radGrad;
		ctx.arc(250, 250, 50, 0, Math.PI*2, true);
		ctx.fill();
		
		// Clear screen by filling with background color
		ctx.fillStyle = "#FAEBD7";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		// You can also write text on canvas
		ctx.font = "bold 40px Arial";
		ctx.fillStyle = "#8DB600";
		ctx.fillText("Hello", 100, 100);
		
		// We can stroke the text as well
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;		
		ctx.strokeText("Hello", 100, 100);
		
		// We can also paint drop shadows
		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;
		ctx.shadowBlur = 3;
		ctx.shadowColor = "black";
		ctx.fillText("Hello", 100, 100);
		
		// Turn off shadows
		ctx.shadowColor = "rgba(0,0,0,0)";
		ctx.shadowBlur = 0;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		
		// We will now draw lines with different end points
		ctx.lineWidth = 20;
		ctx.strokeStyle = "purple";
		ctx.beginPath();
		ctx.moveTo(200, 150);
		ctx.lineCap = "butt";
		ctx.lineTo(200, 250);
		ctx.stroke();
		ctx.lineCap = "round";
		ctx.stroke();
		ctx.lineCap = "square";
		ctx.stroke();
		
		// Drawing curves
		ctx.beginPath();
		
		// Draw a curve from 0 to 180 degrees (3.14 Radians)
		ctx.arc(270,270, 50, 0, 3.14, true);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(320,270, 100, 0, 3.14, false);
		ctx.stroke();
		
		// Create a simple curve by defining XY for the start and end
		ctx.strokeStyle="red";
		ctx.beginPath();
		ctx.moveTo(300, 150);
		ctx.quadraticCurveTo(350, 250, 450, 250);
		ctx.stroke();
		
		// X of the 1st Bézier, Y of the 1st Bézier, X of the 2nd Bézier, 
		// Y of the 2nd, X of the ending Bézier, Y of the ending Bézier 
		ctx.strokeStyle = "blue";
		ctx.beginPath();
		ctx.moveTo(450, 250);
		ctx.bezierCurveTo(550, 250, 450, 100, 550, 100);
		ctx.stroke();
		
		// Clear screen by filling with background color
		ctx.fillStyle = "#FAEBD7";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		ctx.fillStyle = "purple";
		ctx.fillRect(200, 200, 100, 100);
		
		// You can transform elements as well
		ctx.fillStyle = "rgba(10, 150, 255, 0.5)";
		
		// There are many ways to transform including translate, scale, rotate
		ctx.rotate(Math.PI / 4);
		ctx.scale(0.5, 1);
		ctx.fillRect(400, 50, 100, 100);
		
	}

}

onload = init;




1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

41

42

43

44

45

46

47

48

49

50

51

52

53

54

55

56

57

58

59

60

61

62

63

64

65

66

67

68

69

70

71

72

73

74

75

76

77

78

79

80

81

82

83

84

85

86

87

88

89

90

91

92

93

94

95

96

97

98

99

100

101

102

103

104

105

106

107

108

109

110

111

112

113

114

115

116

117

118

119

120

121

122

123

124

125

126

127

128

129

130

131

132

133

134

135

136

137

138

139

140

141

142

143

144

145

146

147

148

149

150

151

152

153

154

155

156

157

158

159

160

161

162

163

164

165

166

167

168

169

170
 function init(){
 
	var canvas = document.getElementById("canvas");
	if(canvas.getContext){
	
		// The ctx object provides functions to paint on the canvas 
		var ctx = canvas.getContext("2d");
		
		// Pick the color to use
		ctx.fillStyle = "#FAEBD7";
		
		// Draw a rectangle starting in the upper left corner of the canvas
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		// Change the draw color
		ctx.fillStyle = "#AF002A";
		
		// Draw a rectangle starting 100 down and 100 in with width
		// and height of 50px
		ctx.fillRect(100, 100, 50, 50);
		
		// You can define a stroke width and color and draw it without a fill
		ctx.lineWidth = 5;
		ctx.strokeStyle = "#A4C639";
		ctx.strokeRect(100, 100, 50, 50);
		
		ctx.fillStyle = "#00308F";
		
		// Says that we want to start drawing a path
		ctx.beginPath();
		
		// Draw an arc / circle (x, y, radius, startAngle, endAngle, direction)
		// Start and end angles are set as radians, but a start of 0 and an
		// end of Math.PI*2 gives you a circle
		// true is counterclockwise and false is clockwise
		ctx.arc(200, 200, 50, 0, Math.PI*2, true);
		
		// Paints the defined shape on the canvas
		ctx.fill();
		
		ctx.fillStyle = "#3B444B";
		ctx.beginPath();
		
		// To draw polygons you move to a starting x y and then use lineTo
		// To draw the other lines followed by closePath
		ctx.moveTo(350, 200);
		ctx.lineTo(400, 50);
		ctx.lineTo(450, 200);
		ctx.closePath();
		ctx.fill();
		
		// You can apply strokes to polygons and circles as well
		ctx.strokeStyle = "#A4C639";
		ctx.beginPath();
		ctx.moveTo(350, 200);
		ctx.lineTo(400, 50);
		ctx.lineTo(450, 200);
		ctx.closePath();
		ctx.stroke();
		
		// You can create gradient fills (top / left to bottom / right)
		var linGrad = ctx.createLinearGradient(400, 100, 500, 500);
		
		// Add the colors and their position in the gradient
		linGrad.addColorStop(0, "#8DB600");
		linGrad.addColorStop(0.5, "#9966CC");
		linGrad.addColorStop(1, "#7C0A02");
		
		ctx.fillStyle = linGrad;
		
		// You could also define the color RGB and opacity for a fill
		// ctx.fillStyle = "rgba(10, 150, 255, 0.5)";
		
		ctx.fillRect(400, 100, 100, 100);
		
		// Create a radial gradient (starting circle x, y, radius - 
		// ending circle x, y, radius )
		var radGrad = ctx.createRadialGradient(275, 250, 5, 290, 260, 100);
		radGrad.addColorStop(0,"red");
		radGrad.addColorStop(1,"white");
		ctx.fillStyle=radGrad;
		ctx.arc(250, 250, 50, 0, Math.PI*2, true);
		ctx.fill();
		
		// Clear screen by filling with background color
		ctx.fillStyle = "#FAEBD7";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		// You can also write text on canvas
		ctx.font = "bold 40px Arial";
		ctx.fillStyle = "#8DB600";
		ctx.fillText("Hello", 100, 100);
		
		// We can stroke the text as well
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;		
		ctx.strokeText("Hello", 100, 100);
		
		// We can also paint drop shadows
		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;
		ctx.shadowBlur = 3;
		ctx.shadowColor = "black";
		ctx.fillText("Hello", 100, 100);
		
		// Turn off shadows
		ctx.shadowColor = "rgba(0,0,0,0)";
		ctx.shadowBlur = 0;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		
		// We will now draw lines with different end points
		ctx.lineWidth = 20;
		ctx.strokeStyle = "purple";
		ctx.beginPath();
		ctx.moveTo(200, 150);
		ctx.lineCap = "butt";
		ctx.lineTo(200, 250);
		ctx.stroke();
		ctx.lineCap = "round";
		ctx.stroke();
		ctx.lineCap = "square";
		ctx.stroke();
		
		// Drawing curves
		ctx.beginPath();
		
		// Draw a curve from 0 to 180 degrees (3.14 Radians)
		ctx.arc(270,270, 50, 0, 3.14, true);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(320,270, 100, 0, 3.14, false);
		ctx.stroke();
		
		// Create a simple curve by defining XY for the start and end
		ctx.strokeStyle="red";
		ctx.beginPath();
		ctx.moveTo(300, 150);
		ctx.quadraticCurveTo(350, 250, 450, 250);
		ctx.stroke();
		
		// X of the 1st Bézier, Y of the 1st Bézier, X of the 2nd Bézier, 
		// Y of the 2nd, X of the ending Bézier, Y of the ending Bézier 
		ctx.strokeStyle = "blue";
		ctx.beginPath();
		ctx.moveTo(450, 250);
		ctx.bezierCurveTo(550, 250, 450, 100, 550, 100);
		ctx.stroke();
		
		// Clear screen by filling with background color
		ctx.fillStyle = "#FAEBD7";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		ctx.fillStyle = "purple";
		ctx.fillRect(200, 200, 100, 100);
		
		// You can transform elements as well
		ctx.fillStyle = "rgba(10, 150, 255, 0.5)";
		
		// There are many ways to transform including translate, scale, rotate
		ctx.rotate(Math.PI / 4);
		ctx.scale(0.5, 1);
		ctx.fillRect(400, 50, 100, 100);
		
	}
 
}
 
onload = init;

 
