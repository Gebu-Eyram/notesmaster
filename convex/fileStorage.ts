import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const AddFileEntrytoDb = mutation({
  args: {
    fileId: v.string(),
    storageId: v.string(),
    filename: v.string(),
    createdBy: v.string(),
    fileUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert("storedFiles", {
      fileId: args.fileId,
      storageId: args.storageId,
      filename: args.filename,
      createdBy: args.createdBy,
      fileUrl: args.fileUrl,
    });
    return "File inserted successfully";
  },
});

export const GetFileUrl = mutation({
  args: {
    storageId: v.string(),
  },
  handler: async (ctx, args) => {
    const url = await ctx.storage.getUrl(args.storageId);
    return url;
  },
});
