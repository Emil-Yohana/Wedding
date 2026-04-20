const SPREADSHEET_ID = '1m8V2AmWDynhmCFtX7pMxzxXQ6CewY0u_afy8hilJ8uI';
const SHEET_NAME = 'RSVPs';

function doPost(e) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  const data = e.parameter;

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Attendance', 'Number of Guests', 'Dietary Restrictions', 'Message']);
  }

  sheet.appendRow([
    new Date(),
    data.fullName || '',
    data.email || '',
    data.attendance || '',
    data.guests || '',
    data.dietary || '',
    data.message || ''
  ]);

  return ContentService
    .createTextOutput('OK')
    .setMimeType(ContentService.MimeType.TEXT);
}
