import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Video {
  @Field()
  _id: String;
  @Field()
  name: String;
  @Field()
  description: String;
  @Field()
  category: String;
}

export default Video