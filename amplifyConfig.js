import config from "./src/aws-exports";
import { Amplify } from "aws-amplify";

Amplify.configure({ ...config, ssr: true });
