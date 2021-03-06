import {
  Catch,
  ExceptionFilter,
  Inject,
  NotFoundException,
} from '@nestjs/common';

import { I18n } from '../../i18n';

@Catch(NotFoundException)
export class NotFoundFilter implements ExceptionFilter {
  constructor(@Inject('I18n') private i18n: I18n) {}

  public catch(exception: NotFoundException, response) {
    const status = exception.getStatus();

    response.status(status).json({
      message: this.i18n.translate('error.notFound'),
      statusCode: status,
    });
  }
}
