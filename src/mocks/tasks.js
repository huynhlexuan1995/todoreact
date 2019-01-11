const uuidv4 = require('uuid/v4');
let items = [
	{
		id	: uuidv4(),
		name: "Chim Trắng Mồ Côi - Cẩm Ly",
		level: 0 //Small, 1 Medium, 2 High
	},
	{
		id	: uuidv4(),
		name: "Tình Yêu Và Giọt Nước Mắt - Uyên Trang",
		level: 1 //Small, 1 Medium, 2 High
	},
	{
		id	: uuidv4(),
		name: "Áo anh đứt khuy em có thể khâu lại được nhưng tình yêu càng khâu thì con đường đôi ta đi càng ngược",
		level: 2 //Small, 1 Medium, 2 High
	},
	{
		id	: uuidv4(),
		name: "Không Cần Phải Hứa Đâu Em - Phạm Khánh Hưng",
		level: 0 //Small, 1 Medium, 2 High
	},
	{
		id	: uuidv4(),
		name: "Cuộc tình dù đúng dù sai. Tổn thương nhất vẫn chỉ là người con gái",
		level: 1 //Small, 1 Medium, 2 High
	}
];
export default items;
