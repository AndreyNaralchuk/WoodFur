/**
 * Google Apps Script — WoodFur Order Form
 *
 * HOW TO SET UP:
 * 1. Open Google Sheets → create a new spreadsheet
 * 2. Go to Extensions → Apps Script
 * 3. Delete all default code and paste this entire file
 * 4. Replace YOUR_SPREADSHEET_ID with your sheet's ID (from the URL)
 * 5. Click Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web app URL and paste it into index.html (see instructions below)
 */

// ============ CONFIGURATION ============
const SPREADSHEET_ID = '1xSh76_w-9c8EEjfbYB0AJlv3uLv5pZv8mHWfS59_Fuw'; // <-- paste here
const SHEET_NAME = 'Order';
const HEADERS = ['Timestamp', 'Name', 'Second Name', 'Email'];
// ========================================

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'WoodFur API is running' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email) {
      return respond(400, { status: 'error', message: 'Missing required fields' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return respond(400, { status: 'error', message: 'Invalid email address' });
    }

    // Get or create spreadsheet
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Create sheet with headers if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
      // Style the header row
      const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#3B2314');
      headerRange.setFontColor('#FFFFFF');
      headerRange.setHorizontalAlignment('center');
      sheet.setColumnWidths(1, HEADERS.length, 180);
      sheet.setFrozenRows(1);
    }

    // Append the order data
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    sheet.appendRow([
      timestamp,
      data.firstName,
      data.lastName,
      data.email
    ]);

    // Auto-resize columns to fit content
    sheet.autoResizeColumns(1, HEADERS.length);

    // Log to Apps Script console
    Logger.log('New order: ' + data.firstName + ' ' + data.lastName + ' — ' + data.email);

    return respond(200, {
      status: 'ok',
      message: 'Order received successfully'
    });

  } catch (err) {
    Logger.log('Error: ' + err.message);
    return respond(500, {
      status: 'error',
      message: 'Server error: ' + err.message
    });
  }
}

function respond(code, body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
