import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post('save')
  @UseInterceptors(FileInterceptor('pdf-file'))
  async addData(@UploadedFile() file: Express.Multer.File) {
    return await this.employeeService.addData(file);
  }

  @Get()
  async getLatest() {
    return await this.employeeService.getLatest();
  }
}
