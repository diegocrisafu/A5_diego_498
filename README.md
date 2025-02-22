# A5_diego_498
# Lo-Fi GenAI Jungle Project

This project was a wild ride from start to finish. One of my biggest challenges was getting the sound token to work on Google Colab. I spent a lot of time trying different tokens and methods, but nothing seemed to work—until I discovered that handling the login separately was the key. Once I logged in through the CLI, everything fell into place, and I no longer needed to pass the token explicitly in my code.

The image generation part was by far the hardest. I pushed the settings way too high and ended up needing Colab Pro just to render 50 images at 90 epochs. It took a grueling six hours to complete, and the images were nothing like I envisioned—they looked like a vintage TV turned static. In hindsight, trying to do everything in one go was a mistake. I now realize that breaking the process into three distinct parts—data collection and preprocessing, image rendering, and saving—would have made things much smoother and more manageable.

Overall, this assignment taught me a lot about the technical intricacies involved in building a complete generative system. It forced me to troubleshoot, adjust hyperparameters, and really understand the workflows behind diffusion models and sound synthesis. Despite the frustration along the way, I appreciate the challenge; it pushed me to learn new skills and refine my process.

Moving forward, I’ll definitely be applying these lessons to my final project. The experience has shown me that careful planning, proper separation of tasks, and iterative testing are key to creating something both smooth and effective. I’m excited to use what I’ve learned here as a foundation for even more ambitious projects in the future.
