const log = require('node-file-logger');

const options = {
  folderPath: './logs/',
  dateBasedFileNaming: false,
  // fileNamePrefix: 'DailyLogs_',
  fileNameExtension: '.log',    
  dateFormat: 'YYYY_MM_D',
  timeFormat: 'h:mm:ss A',
};

log.SetUserOptions(options);

exports.Logger = log;
