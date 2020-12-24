import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

// 在管道中引入 joi 中 ObjectSchema 类型，进行验证传来的 schema 类型是否正确
import { ObjectSchema } from "@hapi/joi";

@Injectable()
export class UserPipe implements PipeTransform {
  private schema: ObjectSchema;

  // 接受控制器传过来的数据验证规则
  constructor(schema: ObjectSchema) {
    this.schema = schema;
  }


  transform(value: any, metadata: ArgumentMetadata) {

    // 验证前端发来的数据,如果通过 error 返回 undefined
    // 如果不通过则返回错误信息
    let { error } = this.schema.validate(value);

    if (error) {
      return {
        code: 0,
        msg: "验证不通过，请检查数据类型",
      }
    }

    // 如果数据验证通过后，返回原先的数据
    return value;
  }
}
