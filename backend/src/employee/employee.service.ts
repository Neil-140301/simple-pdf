import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class EmployeeService {
  constructor(private dbService: DbService) {}

  async addData(file: Express.Multer.File) {
    const newFile = await this.dbService.employeeData.create({
      data: {
        filename: file.originalname,
        content: file.buffer,
      },
    });
    return newFile.id;
  }

  async getLatest() {
    const file = await this.dbService.employeeData.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 1,
    });

    return file[0].content;
  }
}
