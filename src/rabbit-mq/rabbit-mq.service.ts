import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class RabbitMqService {
    constructor(
        @Inject('rabbit-mq-module') private readonly client: ClientProxy,
      ) {}
    
      public send(pattern: string, data: any) {
        return this.client.send(pattern, data).toPromise();
      }
    }    