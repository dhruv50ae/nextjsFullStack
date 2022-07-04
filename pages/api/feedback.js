import fs from "fs";
import path from "path";

const handler = (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const text = req.body.text;
    const newFeedback = {
      email,
      text,
      id: new Date().toISOString(),
    };

    const filePath = path.join(process.pwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    res.status(200).json({
      message: "this works",
    });
  }
};

export default handler;
