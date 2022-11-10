import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigMulter } from '../middleware/multer.config';
import { Regions } from '../models/Regions';
import { RegionService } from './services/region.service';
import { RegionController } from './controllers/region.controller';
import { Countries } from '../models/Countries';
import { CountryService } from './services/country.service';
import { CountryController } from './controllers/country.controller';
import { Locations } from '../models/Locations';
import { LocationService } from './services/location.service';
import { LocationController } from './controllers/location.controller';
import { Jobs } from '../models/Jobs';
import { JobService } from './services/job.service';
import { JobController } from './controllers/job.controller';
import { Employees } from '../models/Employees';
import { EmployeeService } from './services/employee.service';
import { EmployeeController } from './controllers/employee.controller';
import { Departments } from '../models/Departments';
import { DepartmentService } from './services/department.service';
import { DepartmentController } from './controllers/department.controller';
import { JobHistory } from '../models/JobHistory';
import { JobHistoryService } from './services/job_history.service';
import { JobHistoryController } from './controllers/job_history.controller';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Regions,
      Countries,
      Locations,
      Jobs,
      Employees,
      Departments,
      JobHistory,
    ]),
    MulterModule.register(ConfigMulter.UploadFiles()),
  ],
  providers: [
    RegionService,
    CountryService,
    LocationService,
    JobService,
    EmployeeService,
    DepartmentService,
    JobHistoryService,
  ],
  controllers: [
    RegionController,
    CountryController,
    LocationController,
    JobController,
    EmployeeController,
    DepartmentController,
    JobHistoryController,
  ],
})
export class ApiModule {}
