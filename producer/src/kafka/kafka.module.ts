import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([{
      name: 'IRI_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'business-plan',
          brokers: ['localhost:9092']
        },
        consumer: {
          groupId: 'business-plan-consumer'
        }
      }
    }])
  ]
})
export class KafkaModule { }