import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController  {
  constructor(
    @Inject('IRI_SERVICE') private readonly iriBusinessPlanService: ClientKafka,
    private readonly appService: AppService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/business-plan')
  getBusinessPlan() {
    return this.iriBusinessPlanService.send('business-plan.get', '');
  }

  async onModuleInit() {
    this.iriBusinessPlanService.subscribeToResponseOf('business-plan.get');

    await this.iriBusinessPlanService.connect();
  }

}
