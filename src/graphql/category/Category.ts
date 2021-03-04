import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Category {

  @Field()
  _id: String;
  @Field()
  name: String;
  @Field()
  description: String;
}

export default Category