"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, label, prettyPrint } = winston_1.format;
class logutility {
}
logutility.logger = winston_1.createLogger({
    level: 'info',
    format: winston_1.format.simple(),
    transports: [
        // - Write to all logs with level `info` and above to `combined.log`
        new winston_1.transports.File({ filename: 'combined.log' }),
        // - Write all logs error (and above) to Console/terminal
        new winston_1.transports.Console()
        //log file
        //ambika
    ]
});
exports.logutility = logutility;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ndXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL05WS0lEUy9sb2dnaW5nL2xvZ3V0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBd0Q7QUFDeEQsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxHQUFHLGdCQUFNLENBQUM7QUFDMUQsTUFBYSxVQUFVOztBQUNaLGlCQUFNLEdBQUcsc0JBQVksQ0FBQztJQUN6QixLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxnQkFBTSxDQUFDLE1BQU0sRUFBRTtJQUN2QixVQUFVLEVBQUU7UUFFWixvRUFBb0U7UUFDcEUsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUMsQ0FBQztRQUNwRCx5REFBeUQ7UUFDckQsSUFBSSxvQkFBVSxDQUFDLE9BQU8sRUFBRTtRQUV4QixVQUFVO1FBQ1YsUUFBUTtLQUVQO0NBQ0osQ0FBQyxDQUFDO0FBZlAsZ0NBZ0JDIn0=