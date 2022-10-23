# Corona-Managment-System
הוראות התקנה והרצת הפרויקט: <br>
מסד הנתונים בנוי מ SQL - מצורף קובץ SQLquery2 שבו כתובות השאילתות לבנית המסד.<br>
ע"מ להריץ את המסד מצורף קובץ CoronaManagment.BackUp שצריך לייבא ב Restore DataBase ב SQL.<br>
לאחר הרצת המסד נתונים, יש לפתוח את הפרויקט CoronaManagment_API ב Visual Studio, זהו השרת המתחבר למסד הנתונים ע"י EF. יש צורך לשנות את ה Connection String לפי ה SQL.<br>
לאחר פתיחת שתי התוכנות הנ"ל ניתן להריץ את צד הלקוח פרויקט CoronaManagment הכתוב ב Angular.<br>
יש לפתוח את הפרויקט ב Visual Studio Code ולהריץ את הפקודה npm install ע"מ להתקין node modules, ולאחר מכן להריץ את הפקודה ng s -o ע"מ להריץ את הפרוקיט שיפתח בדפדפן.<br><br>
אופן השימוש בפרויקט:<br> <br>
דף הבית - הצגת כל לקוחות הקופת חולים
![1](https://user-images.githubusercontent.com/93987067/197398710-19270277-47c0-419a-acd4-33a3093e9436.png) <br>
בתחתית דף הבית - סיכום נתוני הקורונה – כמה חולים היו בכל יום בחודש האחרון וכמה לקוחות לא מחוסנים כלל.
![2](https://user-images.githubusercontent.com/93987067/197398770-18886c90-75d8-45e1-ac1b-72e73812047f.png) <br>
בלחיצה על הכפתור הנ"ל – הוספת לקוח חדש 
![3](https://user-images.githubusercontent.com/93987067/197398827-0e3a8c74-9363-4308-8668-8ebceba8afac.png) <br><br>
טופס הוספת לקוח חדש: <br>
![4](https://user-images.githubusercontent.com/93987067/197398880-030e723b-5bbd-4524-82e3-892e19713070.png)<br>
לאחר מילוי הטופס ולחיצה על submit – הודעת alert  על אישור ההוספה וחזרה מידית לדף הבית <br><br>
![5](https://user-images.githubusercontent.com/93987067/197398957-b141da86-0046-469a-b2d0-e7971932c8cc.png)
כפתור ה submit אינו מאופשר במידה וכל השדות הנדרשים לא מלאים וסימון השדות החסרים.
![18](https://user-images.githubusercontent.com/93987067/197400164-69d40771-53e5-4350-94c0-a2ae11d117cc.png)<br>
בלחיצה על האייקון הנ"ל מחיקת הלקוח 
![6](https://user-images.githubusercontent.com/93987067/197399076-a385ea60-7e91-4ff7-af98-0019c79186b1.png) <br> <br>
לאחר המחיקה הודעת alert על הצלחת המחיקה<br><br>
![7](https://user-images.githubusercontent.com/93987067/197399153-b16dbc01-4c03-48dc-9568-89bdc6e21f85.png)<br>
בלחיצה על האייקון הנ"ל עדכון פירטי לקוח
![8](https://user-images.githubusercontent.com/93987067/197399195-0bc29522-06eb-4746-9e74-1d8805545c32.png) <br>
טופס עדכון לקוח – ניתן לשנות ולעדכן את פירטי הלקוח הנבחר <br>
![9](https://user-images.githubusercontent.com/93987067/197399226-3882ffe1-d4b5-49a6-b979-23b8fbca72a8.png) <br>
כפתור ה Submit אינו מאופשר במידה והשדות שגויים או חסרים וסימון השדות השגויים.
![19](https://user-images.githubusercontent.com/93987067/197400463-19cf2ee9-824a-4302-9339-d6f4bb2353b3.png)<br>
לאחר שליחת העידכון – הודעת alert על הצלחת העידכון – וחזרה מיידית לדף הבית <br><br>
![10](https://user-images.githubusercontent.com/93987067/197399286-90f7de79-a0b7-46d2-993e-e6f0a23cca18.png) <br>
בלחיצה על שורת הלקוח – פתיחת דף פירטי הלקוח <br><br>
![11](https://user-images.githubusercontent.com/93987067/197399314-649a044e-60af-4adc-a53d-0bff2a149a2a.png) <br>
![12](https://user-images.githubusercontent.com/93987067/197399368-62bb182c-d0be-462e-be8c-756d3a13045e.png) <br> <br>
נתוני הקורונה של הלקוח הנבחר: <br><br>
חיסונים – ע"י לחיצה על ה + ניתן להוסיף חיסון – תאריך ושם החברה.<br><br>
![13](https://user-images.githubusercontent.com/93987067/197399408-dd16cc2c-fc66-4280-8b4d-6048a2cfa122.png) <br><br>
ניתן להוסיף עד ארבעה חיסונים בלבד לאדם, לאחר הוספת ארבעה חיסונים אין את כפתור ההוספה כמו שמופיע בתמונה הנ"ל. <br><br>
![14](https://user-images.githubusercontent.com/93987067/197399451-44fbdcee-7618-40f7-b0b4-58e5c7815407.png)<br><br>
חולה קורונה – מי שעדיין לא היה חולה ניתן להוסיף תאריך שקיבל תוצאה חיובית ותאריך החלמה ע"י לחיצה על + <br><br>
![15](https://user-images.githubusercontent.com/93987067/197399493-c08acdc2-6553-4596-ae67-60ddae5baf41.png)<br>
![17](https://user-images.githubusercontent.com/93987067/197399554-3561d82f-6cdd-48dd-ad30-785dff741cea.png) <br><br>
<br>לאחר ההוספה יופיע תאריך קבלת תוצאה חיובית ותאריך החלמה לא יהיה ניתן להוסיף תאריך נוסף וכפתור ה + יעלם
![16](https://user-images.githubusercontent.com/93987067/197399575-c4300357-18fa-49b5-85d0-949502487d14.png)<br>
דף תצוגת פירטי לקוח כולל החיסונים שלקח - תאריך וחברה, ותאריך שהיה חולה ותאריך שהבריא.<br>
בצד שמאל למעלה יש חץ - אפשרות לחזור לדף הבית<br>
![20](https://user-images.githubusercontent.com/93987067/197401071-e9d4b074-5358-4301-b51d-3d3f5e1982e7.png)



