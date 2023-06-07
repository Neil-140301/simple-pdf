import { Module } from '@nestjs/common';
import { DbService } from './db/db.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';

@Module({
  imports: [],
  controllers: [EmployeeController],
  providers: [DbService, EmployeeService],
})
export class AppModule {}
